import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = ({ users, onHandleDelete, onToggleMark }) => {
    return (
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
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onHandleDelete: PropTypes.func.isRequired,
    onToggleMark: PropTypes.func.isRequired
};

export default UserTable;
