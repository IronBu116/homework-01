import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductNav from "../../ui/productNav";
import MainContainer from "../../ui/mainContainer";
import ProductCard from "../../ui/productPageUi/productCard";
import { useProduct } from "../../hook/useProducts";

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState();
  const { getProductById } = useProduct();

  useEffect(() => {
    setProduct(getProductById(productId));
  }, [productId, getProductById]);

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
        <MainContainer />
      </>
    );
  }
};

ProductPage.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductPage;
