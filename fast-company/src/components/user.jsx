import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookMark";

const User = ({
  _id,
  name,
  rate,
  completedMeetings,
  profession,
  qualities,
  favorites,
  onHandleDelete,
  onToggleMark,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Qualitie key={item._id} {...item} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <BookMark favorites={favorites} onToggleMark={onToggleMark} id={_id} />
      </td>
      <td>
        <button
          className={"btn btn-danger"}
          onClick={() => onHandleDelete(_id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
