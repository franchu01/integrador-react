import React from "react";

import LogBtns from "../logBtns/LogBtns";
import Navbar from "../navbar/Navbar";
import { PageContainerStyled } from "./LayoutStyles";

import Footer from "../footer/Footer";
import IniciarSesionBoton from "../inciarSesionBoton/IniciarSesionBoton";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainerStyled>{children}</PageContainerStyled>
      
      <Footer />
      <IniciarSesionBoton />
    </>
  );
};

export default Layout;
