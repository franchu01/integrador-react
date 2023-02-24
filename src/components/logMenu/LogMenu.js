import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeLogIn } from '../../actions/toggleLogActions'
import { ExitContainer, LogBigContainer, LogContainer } from './LogMenuStyles'

const LogMenu = () => {
    const state = useSelector( state => state.toggleLog )
    const [toggleRegister, setToggleRegister] = useState(false)
    const dispatch = useDispatch()
  return (
    <>
    { state.open && 
    <LogBigContainer>
        <LogContainer>
            <ExitContainer>X</ExitContainer>
            {
                !toggleRegister ? 
                
                <>
                 <h2>Ya tengo una cuenta</h2>
                <p>Para Iniciar Sesion ingresa tu mail y constraseña</p>
                <TextField id="outlined-basic" label="Ingresa tu mail aqui" variant="outlined" />
                <TextField id="outlined-basic" label="Ingresa tu contraseña aqui" variant="outlined" />
                <div>
                    <Button onClick={ () => dispatch( closeLogIn() ) } > Iniciar Sesion </Button>
                    <Button onClick={ () => setToggleRegister(true) } > Registrate </Button>
                </div>
                </> 
                
                : 
                
                <>
                 <h2>Crear cuenta</h2>
                <p>Para crear una cuenta completa todos los campos</p>
                <TextField id="outlined-basic" label="Ingresa tu mail aqui" variant="outlined" />
                <TextField id="outlined-basic" label="Ingresa tu contraseña aqui" variant="outlined" />
                <TextField id="outlined-basic" label="Repite tu contraseña aqui" variant="outlined" />
                <TextField id="outlined-basic" label="Ingresa tu nombre y apellido" variant="outlined" />
                <div>
                    <Button onClick={ () => dispatch( closeLogIn() ) } > Registrar </Button>
                    <Button onClick={ () => setToggleRegister(false) } > Ya tengo cuenta </Button>
                </div>
                </> 
            }

        </LogContainer>
    </LogBigContainer>
    }
    </>

  )
}

export default LogMenu