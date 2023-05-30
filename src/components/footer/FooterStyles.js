import { Stack } from "@mui/material";
import styled from "styled-components";

export const FooterContainerStyled = styled(Stack)`
  width: 100%;
  height: 25%;
  background-color: #d9d9d9;
  justify-content: right;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoContainerStyled = styled(Stack)`
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
`;

export const RedesContainerStyled = styled(Stack)`
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
