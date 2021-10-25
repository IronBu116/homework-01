import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SelectField from "../common/form/selectField";
import TextAreaField from "../common/form/textAreaField";
import { validator } from "../../utils/validator";
import api from "../../api";

const CreateComment = ({ allUsers, pageId, commentSubmit }) => {
    const [data, setData] = useState({ comment: "", user: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        comment: {
            isRequired: {
                message: "Указан пустой комментарий"
            }
        },
        user: {
            isRequired: {
                message: "Выберите имя пользователя"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        api.comments.add({
            userId: data.user,
            pageId: pageId,
            content: data.comment
        });
        commentSubmit();
        setData({ comment: "", user: "" });
    };

    return (
        <div className="card mb-2">
            <div className="card-body">
                <div>
                    <h2 className="mb-4">New comment</h2>
                    <SelectField
                        label="New comment"
                        name="user"
                        options={allUsers.map((user) => ({
                            value: user._id,
                            name: user.name
                        }))}
                        defaultOption="Выберите пользователя"
                        value={data.user}
                        onChange={handleChange}
                    />
                    <TextAreaField
                        label="Сообщение"
                        name="comment"
                        rows="3"
                        value={data.comment}
                        onChange={handleChange}
                    />
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            disabled={!isValid}
                        >
                            Опубликовать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CreateComment.propTypes = {
    allUsers: PropTypes.array,
    pageId: PropTypes.string,
    commentSubmit: PropTypes.func
};

export default CreateComment;
