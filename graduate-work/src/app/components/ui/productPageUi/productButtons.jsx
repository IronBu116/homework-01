import React, { useState } from "react";
import BackHistoryButton from "../../common/backButton";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

const ProductButtons = ({ product }) => {
  const [count, setCount] = useState(1);
  const history = useHistory();

  const handleIncrement = () => {
    if (count < product.amount) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrement = () => {
    count <= 1 ? setCount(1) : setCount((prevState) => prevState - 1);
  };

  const handleEdit = () => {
    history.push(history.location.pathname + "/edit");
  };

  return (
    <>
      {product.amount === 0 ? (
        <>
          <h3>
            <div>Товара нет в наличии</div>
            <BackHistoryButton />
          </h3>
        </>
      ) : (
        <>
          <strong>Выберите количество: </strong>
          <div className="d-flex align-items-center m-2">
            <button
              className="table__counter--buttons mx-1"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="table__counter mx-1 p-1">{count}</div>
            <button
              className="table__counter--buttons mx-1"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="m-2">
            <button className="header__usernav--link">В корзину</button>
            <button className="header__usernav--link" onClick={handleEdit}>
              Изменить
            </button>
            <BackHistoryButton />
          </div>
        </>
      )}
    </>
  );
};

ProductButtons.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductButtons;
