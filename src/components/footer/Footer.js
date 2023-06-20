import React from "react";
import {
  FooterContainerStyled,
  InfoContainerStyled,
  RedesContainerStyled,
  BigContainerStyled,
} from "./FooterStyles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <FooterContainerStyled>
      <InfoContainerStyled>
        <p>
          {" "}
          SOLO <span>VIRTOUS</span>{" "}
        </p>
      </InfoContainerStyled>
      <InfoContainerStyled>
        <Typography textAlign="center">
          <PlaceIcon /> Todas las imagenes presentadas fueron gracias a
          <a href="https://pixabay.com/es/"> Pixabay</a>,
          <a href="https://www.pexels.com/es-es/"> Pexels</a>,
          <a href="https://www.freepik.es/fotos-populares"> FreePik </a> y
          <a href="https://unsplash.com/es/images"> UnSplash</a>
        </Typography>
      </InfoContainerStyled>
      <BigContainerStyled
        style={{ backgroundColor: "#353535", height: "120px" }}
      >
        <Typography>REDES</Typography>
        <RedesContainerStyled>
          <a href="https://www.linkedin.com/in/francisco-cersosimo-5799731b8/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/francersosimo/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/francisco-cersosimo-5799731b8/">
            <TwitterIcon />
          </a>
          <a href="https://drive.google.com/file/d/1xNOdCxllePOn1sCvY9wJprt4p_o8vc1t/view?usp=sharing">
            <EmailIcon />
          </a>
        </RedesContainerStyled>
      </BigContainerStyled>
    </FooterContainerStyled>
  );
};

export default Footer;
