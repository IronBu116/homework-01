import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../API";
import _ from "lodash";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import SearchBar from "./searchBar";

const UsersList = () => {
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

    const [users, setUsers] = useState();
    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user._id !== userId);
        setUsers(newUsers);
    };

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const clearFilter = () => {
        setSearch({ searchInput: "" });
        setSelectedProf();
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.filter((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                    return user;
                }
                return user;
            })
        );
        console.log(id);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionsSelect = (item) => {
        clearFilter();
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const [search, setSearch] = useState({ searchInput: "" });
    const handleSearch = ({ target }) => {
        clearFilter();
        setSearch((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers =
            selectedProf || search.searchInput
                ? selectedProf
                    ? users.filter((user) =>
                          _.isEqual(user.profession, selectedProf)
                      )
                    : users.filter((user) =>
                          user.name
                              .toLowerCase()
                              .includes(search.searchInput.trim().toLowerCase())
                      )
                : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionsSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <SearchBar search={search} onChange={handleSearch} />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onHandleDelete={handleDelete}
                            onToggleMark={handleToggleBookMark}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading...";
};

UsersList.propTypes = {
    users: PropTypes.array
};

export default UsersList;
