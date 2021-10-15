import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InputField from "./inputField";
import { validator } from "./utils/validator";

const InputForm = () => {
  const student = JSON.parse(localStorage.getItem("student"));

  const [data, setData] = useState(
    student
      ? student
      : {
          name: "",
          sername: "",
          yearOfBirthday: "",
          portfolio: "",
        }
  );

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Необходимо указать имя",
      },
      isName: {
        message:
          "Имя должно начинаться с заглавной буквы и состоять только из букв",
      },
    },
    sername: {
      isRequired: {
        message: "Необходимо указать фамилию",
      },
      isSername: {
        message:
          "Фамилия должно начинаться с заглавной буквы, остальные буквы строчные",
      },
    },
    yearOfBirthday: {
      isRequired: {
        message: "Необходимо указать год рождения",
      },
      isYear: {
        message: "Неверно указан формат даты",
      },
    },
    portfolio: {
      isRequired: {
        message: "Необходимо указать ссылку на портфолио",
      },
      isLink: {
        message: "Не верно указан формат ссылки",
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    const isValid = validate();
    if (!isValid) {
      return;
    } else {
      console.log("SUBMIT");
      localStorage.setItem("student", JSON.stringify(data));
      history.push("/student");
    }
  };

  const handleClickBack = () => {
    console.log("BACK");
    history.goBack();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <div className="mb-4">
            <form onSubmit={handleSubmit}>
              <h1>Создать</h1>
              <InputField
                label="Имя"
                type="text"
                name="name"
                placeholder="Иван"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Фамилия"
                type="text"
                name="sername"
                placeholder="Иванов"
                value={data.sername}
                onChange={handleChange}
                error={errors.sername}
              />
              <InputField
                label="Год рождения"
                type="text"
                name="yearOfBirthday"
                placeholder="1994"
                value={data.yearOfBirthday}
                onChange={handleChange}
                error={errors.yearOfBirthday}
              />
              <InputField
                label="Портфолио"
                type="text"
                name="portfolio"
                placeholder="https://github.com/IvanovIvan"
                value={data.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
              />
              {student ? (
                <div className="d-inline-flex flex-wrap">
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={handleClickBack}
                  >
                    Назад
                  </button>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary me-2"
                  >
                    Обновить
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={!isValid}
                  className="btn btn-primary w-100"
                >
                  Создать
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
