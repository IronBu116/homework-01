import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import productService from "../../services/product.service";
import { toast } from "react-toastify";
import ProductNav from "../ui/productNav";
import MainContainer from "../ui/mainContainer";

const ProductContext = React.createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const { content } = await productService.get();
        setProducts(content);
        setLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    }
    getProducts();
  }, []);

  const getProductById = (id) => {
    return products.find((p) => p._id === id);
  };

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {!isLoading ? (
        children
      ) : (
        <>
          <ProductNav>
            <div className="product__nav-item">Загрузка...</div>
          </ProductNav>
          <MainContainer />
        </>
      )}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProductProvider;
