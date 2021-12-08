import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return "input__field--text form-control" + (error ? " is-invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mb-2">
      <div className="input__field--container">
        <label htmlFor={name}>
          <strong>{label}</strong>
        </label>
        <div className="input-group has-validation">
          <input
            type={showPassword ? "text" : type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className={getInputClasses()}
            placeholder="..."
          />

          {type === "password" && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={toggleShowPassword}
            >
              <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
            </button>
          )}
          <div className="invalid-feedback ">{error}</div>
        </div>
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
