import { combineReducers } from "redux";
import post from "./post";
import login from "./login";
import product from "./product";
import cart from "./cart";

export default combineReducers({
  post,
  login,
  product,
  cart,
});
