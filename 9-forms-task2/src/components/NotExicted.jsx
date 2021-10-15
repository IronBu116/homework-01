import React from "react";
import { Link } from "react-router-dom";

const NotExicted = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h1>Карточка студента</h1>
          <h4>Нет данных</h4>
          <Link className="btn btn-primary" to="/inputForm">
            Добавить
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotExicted;
