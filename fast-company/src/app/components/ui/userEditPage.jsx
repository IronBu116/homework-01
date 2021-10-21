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

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return <UserEditForm user={user} />;
    } else {
        return <h1>Loading...</h1>;
    }
};

UserEditPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserEditPage;
