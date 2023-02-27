import React from 'react'
import { BigContainerStyled, CardContainerStyled, CardInfoContainer,  SeparationDivStyled } from './ProductCardStyles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { Button } from '@mui/material'

const ProductCard = (props) => {

  const dispatch = useDispatch()

  return (
    <BigContainerStyled>
        <CardContainerStyled>
          <img src={require(`../../data${props.props.img}`)} alt='imagen' />
          <SeparationDivStyled></SeparationDivStyled>
            <CardInfoContainer>
              <h3>{props.props.name}</h3>
              <p>${props.props.price}</p>
              <p>Cinco cuotas de ${ props.props.price / 5 }</p>
              <p>Cantidad de ventas: {Math.floor(Math.random()*20) + props.props.id }</p>
              <Button variant='contained' color='error' onClick={ () => dispatch( addToCart(props.props.id) ) } >Agregar al Carrito</Button>
            </CardInfoContainer>
        </CardContainerStyled>
    </BigContainerStyled>
  )
}

export default ProductCard