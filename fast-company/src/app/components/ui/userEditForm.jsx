import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../api";

const UserEditForm = ({ user }) => {
    console.log(user.qualities);
    const [data] = useState({
        name: user.name,
        email: user.email || "",
        profession: user.profession.name,
        sex: user.sex || "Male",
        qualities: user.qualities
    });

    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfog = {
        name: {
            isRequired: {
                message: "Введите ваше имя"
            },
            isName: {
                message: "Имя должно состоять только из букв"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        profession: {
            isRequired: { message: "Обязательно выберите вашу профессию" }
        },
        qualities: {
            isRequired: { message: "Выберите хотя бы одно качество" }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfog);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return <h1>dads</h1>;
};

UserEditForm.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserEditForm;
