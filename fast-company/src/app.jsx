import React, { useState } from "react";
import API from "./API";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user._id !== userId);
        setUsers(newUsers);
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

    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                onHandleDelete={handleDelete}
                onToggleMark={handleToggleBookMark}
                users={users}
            />
        </>
    );
};

export default App;
