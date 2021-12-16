import axios from "axios";

export const LOGIN = "LOGIN";

export const login = (data) => {
  return async (dispatch) => {
    try {
      //   const respone = await axios.post("https://reqres.in/api/login");
      dispatch({ type: LOGIN, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
