import { GET_ALL_PRODUCTS } from "../actions/product";

const intialState = {
  products: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
