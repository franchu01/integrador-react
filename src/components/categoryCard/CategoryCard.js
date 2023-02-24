import { Card } from '@mui/material'
import React from 'react'
import { CategoryCardStyled, InfoContainerStyled } from './categoryCardStyles'

const CategoryCard = ( item ) => {
  return (
    <Card>
        <InfoContainerStyled>
            <img src='https://via.placeholder.com/50' />
            <h3>{item.props.name}</h3>
            <p>${item.props.price}</p>
            <p>Cinco coutas de ${item.props.price / 5}</p>
        </InfoContainerStyled>

    </Card>
  )
}

export default CategoryCard