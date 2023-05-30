import React from "react";

import Navbar from "../navbar/Navbar";
import { PageContainerStyled } from "./LayoutStyles";

import Footer from "../footer/Footer";
import IniciarSesionBoton from "../inciarSesionBoton/IniciarSesionBoton";
import PopUpMenu from "../popUpMenu/PopUpMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainerStyled>{children}</PageContainerStyled>

      <Footer />
      <IniciarSesionBoton />
      <PopUpMenu />
    </>
  );
};

export default Layout;
