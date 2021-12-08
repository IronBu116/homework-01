import React from "react";
import ProductInfo from "./productInfo";
import ProductImg from "./productImg";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <>
      <ProductInfo product={product} />
      <ProductImg />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
