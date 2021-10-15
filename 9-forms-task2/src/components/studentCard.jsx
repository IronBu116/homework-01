import React from "react";
import { Link } from "react-router-dom";

const StudentCard = () => {
  const student = JSON.parse(localStorage.getItem("student"));

  const renderAge = (year) => {
    const age = new Date().getFullYear() - Number(student.yearOfBirthday);
    if (age % 10 > 4 || age % 10 === 0 || (age >= 10 && age <= 20))
      return `${age} лет`;
    if (age % 10 !== 1) return `${age} годa`;
    return `${age} год`;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h1>Карточка студента</h1>
          <h5>
            <b>Имя: </b>
            {student.name}
          </h5>
          <h5>
            <b>Фамилия: </b>
            {student.sername}
          </h5>
          <h5>
            <b>Год рождения: </b>
            {student.yearOfBirthday}
            {` (${renderAge()})`}
          </h5>
          <h5>
            <b>Портфолио: </b>
            {student.portfolio}
          </h5>
          <Link className="btn btn-primary" to="/inputForm">
            Редактировать
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
