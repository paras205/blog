import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: GET_ALL_PRODUCTS, payload: response?.data });
    } catch (err) {
      console.log(err);
    }
  };
};
