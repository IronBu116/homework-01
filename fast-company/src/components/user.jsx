import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../API";
import Qualitie from "../components/qualitie";

const User = ({ match, history }) => {
    const [user, setUser] = useState();
    const { userId } = match.params;

    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, [userId]);

    console.log(userId, user);

    if (!user) {
        return "loading";
    }

    return (
        <>
            <h1>{user.name}</h1>
            <h2>Профессия: {user.profession.name}</h2>
            <div>{user.qualities.map(Qualitie)}</div>
            <p>completedMeetings: {user.completedMeetings}</p>
            <p>rate: {user.rate}</p>
            <button onClick={() => history.push("/users")}>
                Все пользователи
            </button>
        </>
    );
};

User.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
};

export default User;
