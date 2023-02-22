import React from 'react'
import { CardContainerStyled, CardStyled, CategoriesContainerStyled, CategoryStyled, HeroContainerStyled, HeroHeaderContainerStyled, InputSearchStyled, VerTodoButtonStyled } from './HeroStyles'
import { products } from '../../data/Products'
import { categories } from '../../data/Categories'
import { LinkStyled } from '../link/linkStyles'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../../types'
import { addToCart } from '../../actions/cartActions'

const Hero = () => {

  const dispatch = useDispatch()

  return (
    <HeroContainerStyled>
      
      <HeroHeaderContainerStyled>
        <h1> Nuestros Productos ... </h1>
      </HeroHeaderContainerStyled>

      <CardContainerStyled>
        {products.map( (product) => {
          return <CardStyled key={product.id} >
            <LinkStyled to={`/product/${product.id - 1}`} >
            <img src='https://via.placeholder.com/300' alt='imagen' />
            <h4>{product.name}</h4>
            <p>{product.desc}</p>
            <p>${product.price}</p>
            </LinkStyled>
            <button onClick={ () => dispatch(addToCart(product.id)) } >Add</button>
          </CardStyled>
        } )}
      </CardContainerStyled>

      <VerTodoButtonStyled>VER TODOS LOS PRODUCTOS</VerTodoButtonStyled>

    </HeroContainerStyled>
  )
}

export default Hero