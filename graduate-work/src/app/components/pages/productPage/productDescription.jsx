import React from "react";
import { renderPrice } from "../../../utils/renderPrice";
import PropTypes from "prop-types";

const ProductDecription = ({ product }) => {
  const { name, brand, type, amount, price, description } = product;
  return (
    <>
      <div className="row justify-content-center p-0">
        <h3 className="m-2">{name}</h3>
        <h5>{brand}</h5>
      </div>
      <div className="m-2">
        <strong>Категория: </strong>
        {type}
      </div>
      <div className="m-2">
        <strong>Доступное количество: </strong>
        {amount} шт.
      </div>
      <div className="m-2">
        <strong>Стоимость: </strong>
        {renderPrice(price)} руб.
      </div>
      <div className="m-2">
        <strong>Описание: </strong> {description}
      </div>
    </>
  );
};

ProductDecription.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDecription;
