import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReturnBtnStyled, TitleContainerStyled, TitleStyled } from './TitleStyles'

const Title = ( {children} ) => {

    const navigate = useNavigate()

  return (
    <TitleContainerStyled>
        <TitleStyled> {children} </TitleStyled>
        <ReturnBtnStyled onClick={ () => { navigate("/") } }  >Volver</ReturnBtnStyled>
    </TitleContainerStyled>
  )
}

export default Title