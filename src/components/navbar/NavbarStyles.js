import styled from "styled-components";

export const NavbarStyled = styled.div`

    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #0b090a;

    span {
        cursor: pointer;
        width: fit-content;
    }

    h1 {
        font-size: 62px;
        color: #ba181b;
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
    align-items: center;
    justify-content: center;

    gap: 7px;

`

export const MenuToggleStyled = styled.div`

    display: block;
    position: initial;
    align-items: center;
    margin: 0;
    color: #ba181b;
    top: -700px;
    left: -2000px;
    gap: 15px;
    right: 0;
    bottom: 0;
    text-align: center;
    transition: all .6s ease;
    span{
        font-size: 40px;
        font-weight: bold;
    }

    
    ${({ active }) => active && `
        width: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;

  `}

`

export const BigMenu = styled.div`

    background-color: #0b090a;
    position: absolute;
    top: -700px;
    left: -2000px;
    width: 100%;
    height: 100%;
    transition: all .6s ease;
    
    ${({ active }) => active && `
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 80% 0;
  `}

`

