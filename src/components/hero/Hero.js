import React from 'react'
import { CardContainerStyled, CardStyled, CategoriesContainerStyled, CategoryStyled, HeroContainerStyled, HeroHeaderContainerStyled, InputSearchStyled, VerTodoButtonStyled } from './HeroStyles'
import { products } from '../../data/Products'
import { categories } from '../../data/Categories'
import { LinkStyled } from '../link/linkStyles'

const Hero = () => {
  return (
    <HeroContainerStyled>

      <HeroHeaderContainerStyled>
        <h1> Categorias </h1>
      </HeroHeaderContainerStyled>

      <CategoriesContainerStyled>
        {categories.map((category) => {
          return <CategoryStyled key={category.id}  imgUrl={category.img} />
        } )}
      </CategoriesContainerStyled>
      

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
            <button>Add</button>
          </CardStyled>
        } )}
      </CardContainerStyled>

      <VerTodoButtonStyled>VER TODOS LOS PRODUCTOS</VerTodoButtonStyled>

    </HeroContainerStyled>
  )
}

export default Hero