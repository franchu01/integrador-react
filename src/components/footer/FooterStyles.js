import { Box, Stack } from "@mui/material";
import styled from "styled-components";

export const FooterContainerStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25%;
  background-color: #d9d9d9;
  justify-content: right;
  align-items: center;
  gap: 30px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoContainerStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;

  p {
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #ba181b;
  }
  span {
    color: #ba181b;
  }
  @media (max-width: 1000px) {
    width: auto;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const BigContainerStyled = styled(InfoContainerStyled)`
  flex-direction: column;
`;

export const RedesContainerStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
