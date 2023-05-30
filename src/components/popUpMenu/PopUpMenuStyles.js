import { Stack } from "@mui/material";
import styled from "styled-components";

export const MenuContainer = styled(Stack)`
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const MenuSubContainer = styled(Stack)`
  position: relative;
  flex-direction: column;
  background-color: #edf2f4;
  padding: 50px;
  border-radius: 12px;
  width: 35%;
  gap: 5px;

  @media (max-width: 820px) {
    width: 70%;
  }

  h2 {
    color: #ba181b;
  }
`;

export const ExitContainer = styled(Stack)`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #ba181b;
  :hover {
    transform: scale(1.2);
  }
`;
