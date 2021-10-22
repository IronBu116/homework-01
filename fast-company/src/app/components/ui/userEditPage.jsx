import React, { useState, useEffect } from "react";
// import { validator } from "../../utils/validator";
import api from "../../api";
// import TextField from "../common/form/textField";
// import SelectField from "../common/form/selectField";
// import RadioField from "../common/form/radioField";
// import MultiSelectField from "../common/form/multiSelectField";
import UserEditForm from "./userEditForm";
import PropTypes from "prop-types";

const UserEditPage = ({ userId }) => {
    const [user, setUser] = useState();
    const [professions, setProfession] = useState();
    const [qualities, setQualities] = useState({});

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    if (user && professions && qualities) {
        return (
            <UserEditForm
                user={user}
                professions={professions}
                qualities={qualities}
            />
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

UserEditPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserEditPage;
