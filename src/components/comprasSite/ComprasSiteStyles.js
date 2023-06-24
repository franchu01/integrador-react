import { Box, Stack } from "@mui/material";
import styled from "styled-components";

export const ComprasContainer = styled.div`
  width: 100%;
  min-height: 65vh;
  padding-top: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  background-color: #edf2f4;
  color: black;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  max-width: 800px;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ItemsContainerStyled = styled(Box)`
  border: 1px solid black;
  border-radius: 6px;
  padding: 5px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameQuanityStyled = styled.div`
  display: flex;

  align-items: center;
  gap: 5px;
`;

export const TotalPriceContainer = styled(Box)`
  margin-left: 20px;
`;

export const ItemsNameStyled = styled(Stack)``;
