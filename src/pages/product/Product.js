import React from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { ProductSectionStyled } from './ProductStyles'
import { products } from '../../data/Products'
import { useParams } from 'react-router-dom'

const Product = () => {

    const { id } = useParams()
    
  return (
    <ProductSectionStyled>
        <ProductCard props={products[id]} />
    </ProductSectionStyled>
  )
}

export default Product