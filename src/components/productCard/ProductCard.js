import React from 'react'
import { BigContainerStyled, CardContainerStyled, CardInfoContainer,  SeparationDivStyled } from './ProductCardStyles'

const ProductCard = (props) => {

  

  return (
    <BigContainerStyled>
        <CardContainerStyled>
            <img src='https://via.placeholder.com/300' />
            <SeparationDivStyled></SeparationDivStyled>
            <CardInfoContainer>
              <h3>{props.props.name}</h3>
              <p>${props.props.price}</p>
              <p>Metodos de pago</p>
              <p>Cantidad de ventas: {props.props.id }</p>
              <button>Agregar al Carrito</button>
            </CardInfoContainer>
        </CardContainerStyled>
    </BigContainerStyled>
  )
}

export default ProductCard