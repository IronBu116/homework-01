import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default InputField;
