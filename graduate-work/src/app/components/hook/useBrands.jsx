import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import brandService from "../../services/brand.service";

const BrandContext = React.createContext();

export const useBrands = () => {
  return useContext(BrandContext);
};

export const BrandProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    async function getBrandsList() {
      try {
        const { content } = await brandService.get();
        setBrands(content);
        setLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    }
    getBrandsList();
  }, []);

  function errorCatcher(error) {
    console.log(error);
    const { message } = error.response.data;
    setError(message);
  }

  function getBrand(id) {
    return brands.find((p) => p._id === id);
  }

  return (
    <BrandContext.Provider value={{ isLoading, brands, getBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

BrandProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
