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
      users.map((item) =>
        item._id === id ? { ...item, favorites: !item.favorites } : item
      )
    );
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
