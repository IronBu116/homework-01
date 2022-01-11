import React from "react";
import { renderPrice } from "../../../utils/renderPrice";
import PropTypes from "prop-types";
import Brand from "../brand";
import Category from "../category";

const ProductDecription = ({ product }) => {
  const { name, brand, category, amount, price, description } = product;
  return (
    <>
      <div className="row justify-content-center p-0">
        <h3 className="m-2">{name}</h3>
        <h5>
          <Brand id={brand} />
        </h5>
      </div>
      <div className="m-2">
        <strong>Категория: </strong>
        <Category id={category} />
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
