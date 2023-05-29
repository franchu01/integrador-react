import { Stack } from "@mui/material";
import styled from "styled-components";

export const IniciarSesionBotonContainerStyled = styled(Stack)`

    position: fixed;
    bottom: 20px;
    left: 20px;

    &{
        border: none;
        color: black;
        background-color: transparent;
        cursor: pointer;
        font-weight: bold;
    }
    &:hover{
        color: #ba181b;
    }

`
