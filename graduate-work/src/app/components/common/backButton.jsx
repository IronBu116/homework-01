import React from "react";
import { useHistory } from "react-router";

const BackHistoryButton = () => {
  const history = useHistory();
  return (
    <button className="button__back mt-2" onClick={() => history.goBack()}>
      Назад
    </button>
  );
};

export default BackHistoryButton;
