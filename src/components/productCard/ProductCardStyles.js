import styled from "styled-components";

export const BigContainerStyled = styled.div`

    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    
`

export const CardContainerStyled = styled.div`

    display: flex;
    width: 40%;
    height: 50%;
    background-color: #edf2f4;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    flex-direction: row;
    padding: 35px 20px;
    box-shadow: -2px 0px 13px 2px rgba(0,0,0,0.48);

    img { 
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
    }

`

export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        font-size: 30px;
    }

`

export const SeparationDivStyled = styled.div`

    background-color: black;
    width: 1px;
    height: 400px;

`

