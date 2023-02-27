
import { ButtonsContainerStyled, DivStyled, HoverMenuStyled, MenuToggleStyled, NavbarStyled, TitleStyled } from './NavbarStyles'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <>
    <NavbarStyled>
      
        <TitleStyled >VIRTUOUS</TitleStyled>

        <ButtonsContainerStyled>
          <DivStyled></DivStyled>
                <MenuToggleStyled >
                  <span onClick={ () => {navigate("/")} } >Inicio</span>
                  <span onClick={ () => {navigate("cart") } } >Carrito</span>
                  <span onMouseOver={ () => setOpen(true) }  onMouseLeave={ () => setOpen(false) } >Productos</span>
                  {
                    open &&
                    <HoverMenuStyled onMouseOver={ () => setOpen(true) }  onMouseLeave={ () => setOpen(false) }  > 
                    <p onClick={ () => {navigate("category/bermuda") } } >Bermudas</p>
                    <p onClick={ () => {navigate("category/buzo") } } >Buzos</p>
                    <p onClick={ () => {navigate("category/remera") } } >Remeras</p>
                    <p onClick={ () => {navigate("category/sweater") } } >Sweaters</p>
                  </HoverMenuStyled>
                  }
                  
                  
                  <span onClick={ () => alert('En nuestro pie de pagina encontraras toda la informacion que necesites') } >Contacto</span>
                  <span onClick={ () => {navigate("*")} } >Mis Compras</span>
                </MenuToggleStyled>  
            <DivStyled></DivStyled>
        </ButtonsContainerStyled>
    </NavbarStyled>
    </>
  )
}

export default Navbar