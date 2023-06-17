import React from "react";

import Navbar from "../navbar/Navbar";
import { PageContainerStyled } from "./LayoutStyles";

import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainerStyled>{children}</PageContainerStyled>
      <Footer />
    </>
  );
};

export default Layout;
