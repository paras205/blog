import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import { login } from "../store/actions/login";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
    navigate("/");
  };
  const isAuth = localStorage.getItem("user") ? true : false;
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <Input
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
