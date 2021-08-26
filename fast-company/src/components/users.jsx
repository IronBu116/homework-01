import React, { useState } from "react";
import API from "../API";

const tableColumns = [
  "№",
  "Имя",
  "Качества",
  "Профессия",
  "Встретился, раз",
  "Оценка",
];

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(
      users.filter((user) => {
        return user._id !== userId.target.closest("tr").id;
      })
    );
  };

  const renderPhrase = (number) => {
    if (1 < number && number < 5) {
      return `${number} человека тусанет с тобой`;
    } else {
      return `${number} человек тусанет с тобой`;
    }
  };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += users.length === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      <h2>
        <span className={getBageclasses()}>{renderPhrase(users.length)}</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={tableColumns.indexOf(column)} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr id={user._id} key={user._id}>
              <th scope="row" key={user.name}>
                {users.indexOf(user) + 1}
              </th>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => (
                  <div
                    className={"badge m-1 bg-" + quality.color}
                    key={quality._id}
                  >
                    {quality.name}
                  </div>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate + " /5"}</td>
              <td>
                <button onClick={handleDelete} className="btn btn-danger">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
