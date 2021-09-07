import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookMark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    rate,
    completedMeetings,
    profession,
    qualities,
    onHandleDelete,
    bookmark,
    onToggleMark
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
                <BookMark status={bookmark} onClick={() => onToggleMark(_id)} />
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

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array.isRequired,
    onHandleDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool,
    onToggleMark: PropTypes.func.isRequired
};

export default User;
