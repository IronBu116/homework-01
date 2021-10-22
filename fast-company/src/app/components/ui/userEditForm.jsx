import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import { useHistory } from "react-router";

const UserEditForm = ({ user, professions, qualities }) => {
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession._id,
        sex: user.sex,
        qualities: user.qualities
    });
    const history = useHistory();
    const [errors, setErrors] = useState({});

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

    console.log(qualities);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const updatedProfession = Object.values(professions).filter(
            (profession) => profession._id === data.profession
        )[0];
        const updatedQualities = []
        api.users.update(user._id, { ...data, profession: updatedProfession });
        console.log(data);
        history.goBack();
    };

    console.log(data);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Введите Ваше имя"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <SelectField
                            label="Выберите Вашу профессию"
                            defaultOption="Укажите профессию"
                            onChange={handleChange}
                            options={professions}
                            value={data.profession}
                            error={errors.profession}
                        />
                        <RadioField
                            label="Выберите Ваш пол"
                            options={[
                                { name: "Male", value: "male" },
                                { name: "Female", value: "female" },
                                { name: "Other", value: "other" }
                            ]}
                            value={data.sex}
                            name="sex"
                            onChange={handleChange}
                        />
                        <MultiSelectField
                            defaultValue={data.qualities.map((qualitie) => ({
                                label: qualitie.name,
                                value: qualitie._id,
                                color: qualitie.color
                            }))}
                            label="Выберите Ваши качества"
                            name="qualities"
                            options={qualities}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

UserEditForm.propTypes = {
    user: PropTypes.object.isRequired,
    professions: PropTypes.object.isRequired,
    qualities: PropTypes.object.isRequired
};

export default UserEditForm;
