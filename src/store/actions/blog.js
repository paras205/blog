import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com";
export const GET_BLOGS = "GET_BLOGS";
export const GET_BLOG = "GET_BLOG";

export const getBlogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseURL}/posts`);
      dispatch({ type: GET_BLOGS, payload: response?.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getBlogDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseURL}/posts/${id}`);
      dispatch({ type: GET_BLOG, payload: response?.data });
    } catch (err) {
      console.log(err);
    }
  };
};
