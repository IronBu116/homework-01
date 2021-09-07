import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users: allUsers, onHandleDelete, onToggleMark }) => {
    const count = allUsers.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log(pageIndex);
        setCurrentPage(pageIndex);
    };
    const users = paginate(allUsers, currentPage, pageSize);
    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <User
                                key={user._id}
                                {...user}
                                onHandleDelete={onHandleDelete}
                                onToggleMark={onToggleMark}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onHandleDelete: PropTypes.func.isRequired,
    onToggleMark: PropTypes.func.isRequired
};

export default Users;
