import styled from "styled-components";

export const CategoryCardStyled = styled.div`
  width: 200px;
  height: 350px;

  border-radius: 6px;
  border: 1px solid black;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 370px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
