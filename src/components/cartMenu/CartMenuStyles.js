import styled from "styled-components";

export const CartContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  margin-bottom: 40px;
  @media (max-width: 820px) {
    height: auto;
  }
`;

export const CartDataContainerStyled = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  background-color: #edf2f4;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;

  @media (max-width: 640px) {
    width: auto;
  }

  @media (max-width: 820px) {
    justify-content: center;
  }
`;

export const CartTitleStyled = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const CustomBarStyled = styled.div`
  background-color: black;
  height: 1px;
  width: 400px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ItemInCartCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  width: 70%;
  margin-top: 20px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    width: 95%;
  }
`;
export const ItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const PlusStyled = styled.button`
  border: none;
  cursor: pointer;
`;

export const MinusStyled = styled.button`
  border: none;
  cursor: pointer;
`;

export const QuantityStyled = styled.p``;

export const QuantityHandlerStyled = styled.div`
  display: flex;
  border: 1px solid black;
  height: 30px;
  align-items: center;
`;
export const EliminateBtnStyled = styled.button`
  border: none;
  color: red;
  cursor: pointer;
`;
export const FinalizarCompraStyled = styled.button`
  border: none;
  border-radius: 8px;
  padding: 7px 15px;
  color: white;
  background-color: #3483fa;
  font-size: 15px;
  cursor: pointer;
`;

export const DisplayFlexDiv = styled.div`
  display: flex;
  gap: 10px;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const EmptyCartStyled = styled.div`
  display: block;
  margin: 20px;
`;
