import React, { useEffect } from 'react'
import { CartContainerStyled, CartDataContainerStyled, CartTitleStyled, CustomBarStyled, DisplayFlexDiv, EliminateBtnStyled, EmptyCartStyled, FinalizarCompraStyled, ItemInCartCardStyled, ItemsContainerStyled, MinusStyled, PlusStyled, QuantityHandlerStyled, QuantityStyled } from './CartMenuStyles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from '../../actions/cartActions';
import { useState } from 'react';
const CartMenu = () => {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()
    const handlePrice = () => {
      setTotalPrice( state.cart.reduce((suma, item) => suma += item.price * item.quantity ,0)  ) 
    }

    useEffect(() => {
      handlePrice()
    } )

  return (
    <CartContainerStyled>
        <CartDataContainerStyled>
            <CartTitleStyled>Tu Carrito <ShoppingCartIcon/> </CartTitleStyled>
            <CustomBarStyled></CustomBarStyled>

            {
              state.cart.length ? 
              
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
              <DisplayFlexDiv>
               <p>Total: $ {totalPrice}</p>
               <FinalizarCompraStyled onClick={ () => { dispatch( clearCart() ) } } >Finalizar Compra</FinalizarCompraStyled>
              </DisplayFlexDiv>
              </ItemsContainerStyled> : 

              <ItemsContainerStyled>
                
              <EmptyCartStyled>
                <h3>Tu carrito de compras se encuentra vacio! </h3>
                <p>No sabes que comprar? Estas indeciso? ....</p>
                <p>Vuelve a nuestra pagina para no perderte de nuestros productos unicos de verano!</p>
                <FinalizarCompraStyled onClick={ () => navigate("/") } >Volver</FinalizarCompraStyled>
              </EmptyCartStyled>

              </ItemsContainerStyled>

              }

              <CustomBarStyled></CustomBarStyled>

        </CartDataContainerStyled>
    </CartContainerStyled>
  )
}

export default CartMenu