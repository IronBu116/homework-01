import { useState } from "react";
import products from "../mockData/products.json";
import categories from "../mockData/categories.json";
import brands from "../mockData/brands.json";
import httpService from "../services/http.service";

const useMockData = () => {
  const [error, setError] = useState(null);

  async function initialize() {
    try {
      for (const prod of products) {
        await httpService.put("product/" + prod._id, prod);
      }
      for (const brand of brands) {
        await httpService.put("brand/" + brand._id, brand);
      }
      for (const category of categories) {
        await httpService.put("category/" + category._id, category);
      }
    } catch (error) {
      setError(error);
    }
  }

  return { error, initialize };
};

export default useMockData;
