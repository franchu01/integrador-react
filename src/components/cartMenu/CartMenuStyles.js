import styled from "styled-components";

export const CartContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: white;
`

export const CartDataContainerStyled = styled.div`
    
    display: flex;
    width: 80%;
    height: auto;
    background-color: #edf2f4;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
`
export const CustomBarStyled = styled.div`
    background-color: black;
    height: 1px;
    width: 400px;
`

export const ItemInCartCardStyled = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    width: 70%;

`
export const ItemsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
    height: auto;
    justify-content: center;
    align-items: center;
    
`

export const PlusStyled = styled.button`
    border: none;
    
`

export const MinusStyled = styled.button`
    border: none;
    
`

export const QuantityStyled = styled.p`

    
    
`

export const QuantityHandlerStyled = styled.div`

    display: flex;
    border: 1px solid black;
    height: 30px;
    align-items:center;

`
export const EliminateBtnStyled = styled.button`

    border: none;
    color: red;

`
