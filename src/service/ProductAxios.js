import axios from "axios";
//get product
// export const getAllProducts = async () => {
  
// };
//create product
export const createProduct = async (product) => {
  try {
    const response = await axios.post("", product);
    const newProduct = response.data;
    return newProduct;
  } catch (error) {
    console.error(error);
  }
};
//put product

//

//delete product
