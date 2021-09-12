import React, { useState, useEffect } from "react";
import API from "./API";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState();
    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user._id !== userId);
        setUsers(newUsers);
    };

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

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

    return (
        <>
            {users && (
                <Users
                    onHandleDelete={handleDelete}
                    onToggleMark={handleToggleBookMark}
                    users={users}
                />
            )}
        </>
    );
};

export default App;
