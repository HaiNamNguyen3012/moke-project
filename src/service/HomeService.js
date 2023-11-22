import axios from "axios";
import { getAllCategoriesApi, getAllProductsApi } from "../config/API";
//get product
export const getAllProducts = async (setProducts, setIsLoading) => {
  try {
    const response = await axios.get(getAllProductsApi);
    const responseData = response.data;
    setProducts(responseData);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
    setIsLoading(false);
  }
};
//get categories list
export const getAllCategoriesList = async (setCategories) => {
  try {
    const response = await axios.get(getAllCategoriesApi);
    const responseData = response.data;
    setCategories(responseData);
  } catch (error) {
    console.error(error);
  }
};
