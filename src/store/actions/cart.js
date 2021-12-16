export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";

export const addToCart = (item) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
};
