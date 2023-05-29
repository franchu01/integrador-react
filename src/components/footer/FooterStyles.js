import { Stack } from "@mui/material";
import styled from "styled-components";

export const FooterContainerStyled = styled(Stack)`
    
    width: 100%;
    height: 25%;
    background-color: #d9d9d9;
    justify-content: right;
    align-items: center;
    gap: 30px;
    flex-direction: row;

`

export const InfoContainerStyled = styled(Stack)`

    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;

    p{
        font-weight: bold;
    }
    a{
        text-decoration: none;
        color: #ba181b;
    }
    span{
        color: #ba181b;
    }

`

export const RedesContainerStyled = styled(Stack)`

    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
   

`

