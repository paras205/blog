import { ADD_TO_CART, GET_CART_ITEMS } from "../actions/cart";

const intialState = {
  cart: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const findItem = state.cart.find((item) => {
        return item.id == action.payload.id;
      });

      if (findItem) {
        alert("Product already in cart");
        return {
          ...state,
        };
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...state.cart, action.payload])
        );
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case GET_CART_ITEMS:
      return {
        ...state,
        cart: localStorage.getItem("cartItems"),
      };
    default:
      return state;
  }
};
export default productReducer;
