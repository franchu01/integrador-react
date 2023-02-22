import styled from "styled-components";

export const NavbarStyled = styled.div`

    width: 100%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #0b090a;

    span {
        cursor: pointer;
        width: fit-content;
    }

    h1 {
        font-size: 65px;
        color: #ba181b;
        font-family: "Permanent+Marker", sans-serif;
    }

`

export const LinkButtonStyled = styled.button`

    color: #ba181b;
    background-color: transparent;
    border: none;
    margin-right: 15px;
    cursor: pointer;

    :hover{
        transform: scale(1.1);
    }

`

export const ButtonsContainerStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    margin-bottom: 10px;
`

export const MenuToggleStyled = styled.div`

    display: flex;
    position: initial;
    align-items: center;
    margin: 0;
    color: #ba181b;
    gap: 35px;
    right: 0;
    bottom: 0;
    text-align: center;
    transition: all .6s ease;
    span{
        font-size: 25px;
        font-weight: bold;
    }

`

export const DivStyled = styled.div`

    width: 700px;
    height: 1px;
    background-color: #ba181b;
`

