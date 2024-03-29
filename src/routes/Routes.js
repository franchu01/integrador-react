import React from "react";
import Layout from "../components/layout/Layout";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/error/Error404";
import Cart from "../pages/cart/Cart";
import Product from "../pages/product/Product";
import Category from "../pages/category/Category";
import Register from "../pages/register/Register";
import Compras from "../pages/compras/Compras";

const Routes = () => {
  return (
    <Layout>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="register" element={<Register />} />
        <Route path="compras" element={<Compras />} />
        <Route path="*" element={<Error404 />} />
      </ReactDomRoutes>
    </Layout>
  );
};

export default Routes;
