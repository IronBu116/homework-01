import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "../components/pages/productPage";
import ProductsListPage from "../components/pages/productListPage";
import EditProductPage from "../components/pages/EditProductPage/editProductPage";
import ProductProvider from "../components/hook/useProducts";

const Main = () => {
  const { productId, edit } = useParams();

  return (
    <>
      <ProductProvider>
        {productId ? (
          edit ? (
            <EditProductPage productId={productId} />
          ) : (
            <ProductPage productId={productId} />
          )
        ) : (
          <ProductsListPage />
        )}
      </ProductProvider>
    </>
  );
};

export default Main;
