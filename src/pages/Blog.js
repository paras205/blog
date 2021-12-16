import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../store/actions/blog";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const { posts } = useSelector((state) => state.post);
  return (
    <div className="blog-posts-wrapper">
      {posts?.map((item, idx) => {
        return (
          <div className="blog_item" key={idx}>
            <Link to={`/blogs/${item.id}`}>{item.title}</Link>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
