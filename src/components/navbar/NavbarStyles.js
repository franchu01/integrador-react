import styled from "styled-components";

export const NavbarStyled = styled.div`

    width: 100%;
    height: 130px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #0b090a;

    h1 {
        font-size: 62px;
        color: #ba181b;
    }

`

export const LinkButtonStyled = styled.button`

    color: #ba181b;
    background-color: transparent;
    border: 1px solid #ba181b;
    border-radius: 8px;
    padding: 7px;
    margin-right: 15px;
    cursor: pointer;

    :hover{
        transform: scale(1.1);
    }

`

export const ButtonsContainerStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 7px;

`

