import React from "react";
import { useNavigate } from "react-router-dom";
import { TitleContainerStyled, TitleStyled } from "./TitleStyles";
import { Button } from "@mui/material";

const Title = ({ children }) => {
  const navigate = useNavigate();

  return (
    <TitleContainerStyled>
      <TitleStyled> {children} </TitleStyled>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          navigate("/");
        }}
      >
        Volver
      </Button>
    </TitleContainerStyled>
  );
};

export default Title;
