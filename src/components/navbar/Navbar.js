import React from 'react'
import { BigMenu, ButtonsContainerStyled, DivStyled, LinkButtonStyled, MenuToggleStyled, NavbarStyled } from './NavbarStyles'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const productsMenuHandler = () => {
    setIsOpen(!isOpen)
    if(isOpen) {
      return <DivStyled></DivStyled>
    } else {
      return null
    }
  }


  return (
    <>
    <NavbarStyled>
        <h1>VIRTUOUS</h1>

        <ButtonsContainerStyled>
          <DivStyled></DivStyled>
                <MenuToggleStyled >
                  <span onClick={ () => {navigate("/")} } >Inicio</span>
                  <span onClick={ () => {navigate("cart") } } >Carrito</span>
                  <span onMouseOver={ () => productsMenuHandler() } >Productos</span>
                  <span>Contacto</span>
                  <span>Mis Compras</span>
                </MenuToggleStyled>  
            <DivStyled></DivStyled>
        </ButtonsContainerStyled>
    </NavbarStyled>
    </>
  )
}

export default Navbar