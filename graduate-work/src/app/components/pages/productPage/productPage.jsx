import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import ProductCard from "./productCard";
import ProductNav from "../../ui/productNav";
import MainContainer from "../../ui/mainContainer";

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    api.products.getById(productId).then((data) => setProduct(data));
  }, []);

  if (product) {
    return (
      <>
        <ProductNav>
          <div className="product__nav-item">Карточка товара</div>
        </ProductNav>
        <MainContainer>
          <div className="row m-3">
            <ProductCard product={product} />
          </div>
        </MainContainer>
      </>
    );
  } else {
    return (
      <>
        <ProductNav>
          <div className="product__nav-item">Загрузка...</div>
        </ProductNav>
        <MainContainer></MainContainer>
      </>
    );
  }
};

ProductPage.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductPage;
