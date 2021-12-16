import { GET_BLOGS } from "../actions/blog";

const initialState = {
  posts: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
