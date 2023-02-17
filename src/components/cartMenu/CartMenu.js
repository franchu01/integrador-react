import React from 'react'
import { CartContainerStyled, CartDataContainerStyled, CustomBarStyled, ItemInCartCardStyled, ItemsContainerStyled } from './CartMenuStyles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
const CartMenu = () => {
    const state = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(state.cart)
  return (
    <CartContainerStyled>
        <CartDataContainerStyled>
            <p>Tu Carrito <ShoppingCartIcon/> </p>
            <CustomBarStyled></CustomBarStyled>
              <ItemsContainerStyled>
              {state.cart.map((item) => {
                return <ItemInCartCardStyled key={item.id} >
                  <img src='https://via.placeholder.com/50' alt='imagen' />
                  <h4>{ item.name } x {item.quantity} </h4>
                  <button onClick={ () => dispatch( addToCart(item.id) ) } >+</button>
                  <button onClick={ () => dispatch( removeFromCart(item.id) ) } >-</button>
                  <button onClick={ () => dispatch( removeFromCart(item.id,true) ) } >Eliminar</button>
                  <p>${item.price}</p>
                </ItemInCartCardStyled>
              } )}
              </ItemsContainerStyled>
        </CartDataContainerStyled>
    </CartContainerStyled>
  )
}

export default CartMenu