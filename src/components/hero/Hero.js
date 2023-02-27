import React from 'react'
import { CardContainerStyled, CardStyled, HeroContainerStyled, HeroHeaderContainerStyled } from './HeroStyles'
import { products } from '../../data/Products'
import { LinkStyled } from '../link/linkStyles'
import { useDispatch } from 'react-redux'
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
          let img = product.img
          return <CardStyled key={product.id} >
            <LinkStyled to={`/product/${product.id - 1}`} >
            <img src={require(`../../data${product.img}`)} alt='imagen' />
            <h4>{product.name}</h4>
            <p>{product.desc}</p>
            <p>${product.price}</p>
            </LinkStyled>
            <button onClick={ () => dispatch(addToCart(product.id)) } >Add</button>
          </CardStyled>
        } )}
      </CardContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero