import React, { useState, useEffect } from "react";
import api from "../api";
import ProductsListPage from "../components/pages/productListPage";
import { useParams } from "react-router-dom";
import ProductPage from "../components/pages/productPage";

const Main = () => {
  const params = useParams();
  const { productId } = params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  return (
    <>
      {productId ? (
        <ProductPage productId={productId} />
      ) : (
        <ProductsListPage products={products} />
      )}
    </>
  );
};

export default Main;
