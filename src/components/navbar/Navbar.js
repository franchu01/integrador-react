import React from 'react'
import { BigMenu, ButtonsContainerStyled, LinkButtonStyled, MenuToggleStyled, NavbarStyled } from './NavbarStyles'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const navigate = useNavigate()

  return (
    <>
    <NavbarStyled>
        <>.</>
        <BigMenu active={openMenu} ></BigMenu>
        <h1>VIRTUOUS</h1>
        <ButtonsContainerStyled>
            {
              openMenu && (
                <MenuToggleStyled active={openMenu} >
                  <span onClick={ () => {navigate("/"); toggleMenu() } } >Home</span>
                  <span onClick={ () => {navigate("cart"); toggleMenu() } } >Cart</span>
                  <span>Check Out</span>
                  <span>About</span>
                  <span>Blog</span>
                </MenuToggleStyled>
              )
            }
            
            <LinkButtonStyled onClick={toggleMenu}  >
              <BurgerMenu active={openMenu} />
            </LinkButtonStyled>
            
        </ButtonsContainerStyled>
    </NavbarStyled>
    </>
  )
}

export default Navbar