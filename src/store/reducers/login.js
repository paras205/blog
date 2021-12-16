import { LOGIN } from "../actions/login";

const intialState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        isAuth: true,
        user: localStorage.getItem("user"),
      };
    default:
      return state;
  }
};
export default authReducer;
