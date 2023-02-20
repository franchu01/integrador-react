import React from 'react'
import { CartContainerStyled, CartDataContainerStyled, CustomBarStyled, EliminateBtnStyled, ItemInCartCardStyled, ItemsContainerStyled, MinusStyled, PlusStyled, QuantityHandlerStyled, QuantityStyled } from './CartMenuStyles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { useState } from 'react';
const CartMenu = () => {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0)
    
    
  return (
    <CartContainerStyled>
        <CartDataContainerStyled>
            <p>Tu Carrito <ShoppingCartIcon/> </p>
            <CustomBarStyled></CustomBarStyled>
              <ItemsContainerStyled>
              {state.cart.map((item) => {
                return <ItemInCartCardStyled key={item.id} >
                  <img src='https://via.placeholder.com/50' alt='imagen' />
                  <h4>{ item.name }</h4>
                  <QuantityHandlerStyled>
                    <MinusStyled onClick={ () => {dispatch( removeFromCart(item.id) )  } } >-</MinusStyled>
                    <QuantityStyled>{item.quantity}</QuantityStyled>
                    <PlusStyled onClick={ () => {dispatch( addToCart(item.id) )  } } >+</PlusStyled>
                  </QuantityHandlerStyled>
                  <EliminateBtnStyled onClick={ () => {dispatch( removeFromCart(item.id,true) )  } } >Eliminar</EliminateBtnStyled>
                  <p>${item.price}</p>
                </ItemInCartCardStyled>
              } )}
              <CustomBarStyled></CustomBarStyled>
              <p>Total: {totalPrice}</p>
              </ItemsContainerStyled>
        </CartDataContainerStyled>
    </CartContainerStyled>
  )
}

export default CartMenu