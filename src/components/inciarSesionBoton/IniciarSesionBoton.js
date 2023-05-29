import React from 'react'
import { IniciarSesionBotonContainerStyled } from './IniciarSesionBotonStyles'
import { useDispatch } from 'react-redux'
import { openLogIn } from '../../actions/toggleLogActions';

const IniciarSesionBoton = () => {
    const dispatch = useDispatch();
  return (
    <IniciarSesionBotonContainerStyled>
        <button onClick={ () => dispatch(openLogIn()) } >Iniciar Sesion</button>
    </IniciarSesionBotonContainerStyled>
  )
}

export default IniciarSesionBoton