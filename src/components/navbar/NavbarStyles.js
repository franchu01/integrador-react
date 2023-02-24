import styled from "styled-components";

export const NavbarStyled = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,100;1,200&display=swap');

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
    

`

export const TitleStyled = styled.h1`

    font-size: 65px;
    color: #ba181b;
    font-family: 'Cinzel', serif;

    transform: ${ props => props.fix ? `scale(1.5)` :   `scale(1)` };

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
    position: relative;
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

export const HoverMenuStyled = styled.div`
    position: absolute;
    background-color: #0b090a;
    color:  #ba181b;
    border: 1px solid #ba181b;
    border-radius: 6px;
    width: 200px;

    display: flex;
    flex-direction: column;

    top: 30px;
    left: 180px;

    p {
        :hover {
            color: white;
        }
        cursor: pointer;
    }

`