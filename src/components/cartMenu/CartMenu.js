import React from 'react'
import { CartContainerStyled, CartDataContainerStyled, CustomBarStyled } from './CartMenuStyles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
const CartMenu = () => {
    const cart = false
    const navigate = useNavigate()
  return (
    <CartContainerStyled>
        <CartDataContainerStyled>
            <p>Tu Carrito <ShoppingCartIcon/> </p>
            <CustomBarStyled></CustomBarStyled>

            { cart ?
             null : 
             <><p>Tu carrito se encuentra vacio</p> <span>¿No sabes que comprar? Hay miles de productos fachas que te esperan!!</span> <button onClick={ () => navigate('/') } >Descubrir productos</button> </> }

        </CartDataContainerStyled>
    </CartContainerStyled>
  )
}

export default CartMenu