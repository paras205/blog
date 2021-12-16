import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Product from "./pages/Product";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blogs/:id" exact element={<BlogDetail />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/products" exact element={<Product />} />
        <Route path="/" exact element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
