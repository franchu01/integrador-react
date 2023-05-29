import React from "react";
import About from "../about/About";
import LogBtns from "../logBtns/LogBtns";
import Navbar from "../navbar/Navbar";
import { PageContainerStyled } from "./LayoutStyles";
import Prueba from "../prueba/Prueba";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainerStyled>{children}</PageContainerStyled>
      <Prueba />
      <LogBtns />
      <About />
    </>
  );
};

export default Layout;
