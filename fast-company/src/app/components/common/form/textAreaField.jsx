import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, value, name, rows, onChange, error }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <textarea
                className={getInputClasses()}
                name={name}
                value={value}
                id={name}
                rows={rows}
                onChange={handleChange}
            ></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextAreaField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextAreaField;
