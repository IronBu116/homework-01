import React from "react";
import PropTypes from "prop-types";
/* import User from "./user"; */
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookMark";

const UserTable = ({
    users,
    onHandleDelete,
    onToggleMark,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className={"btn btn-danger"}
                    onClick={() => onHandleDelete(user._id)}
                >
                    Удалить
                </button>
            )
        }
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onHandleDelete: PropTypes.func.isRequired,
    onToggleMark: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
