import { Stack, Typography, Container, TextField, Button } from "@mui/material";
import styled from "styled-components";

export const BigContainer = styled(Stack)`
  min-height: 65vh;
  max-height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BigSubContainer = styled(Stack)`
  color: black;
  border: 1px solid #ba181b;
  border-radius: 16px;
  background-color: white;
  padding: 20px;
  gap: 5px;
`;

export const CreateAccountStyled = styled.h2`
  color: #ba181b;
  font-size: 40px;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-height: 700px) {
    font-size: 30px;
  }
`;

export const PageContainer = styled(Container)`
  background-color: black;
  color: #ba181b;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 2rem; /* Add padding for larger screens */
  }
`;
