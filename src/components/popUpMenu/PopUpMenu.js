import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ExitContainer,
  MenuContainer,
  MenuSubContainer,
} from "./PopUpMenuStyles";
import { closeLogIn } from "../../actions/toggleLogActions";
import { Button, Stack, TextField } from "@mui/material";

const PopUpMenu = () => {
  const state = useSelector((state) => state.toggleLog);
  const [toggleRegister, setToggleRegister] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {state.open && (
        <MenuContainer>
          <MenuSubContainer>
            {!toggleRegister ? (
              <Stack gap="5px">
                <h2>Iniciar Sesion</h2>
                <ExitContainer onClick={() => dispatch(closeLogIn())}>
                  X
                </ExitContainer>
                <TextField
                  id="outlined-basic"
                  label="Ingresa tu mail aqui"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Ingresa tu contraseña aqui"
                  variant="outlined"
                />
                <div>
                  <Button onClick={() => dispatch(closeLogIn())}>
                    Inciar Sesion
                  </Button>
                  <Button onClick={() => setToggleRegister(true)}>
                    Registrar
                  </Button>
                </div>
              </Stack>
            ) : (
              <Stack gap="5px">
                <h2>Crear Cuenta</h2>
                <ExitContainer onClick={() => dispatch(closeLogIn())}>
                  X
                </ExitContainer>
                <TextField
                  id="outlined-basic"
                  label="Ingresa tu mail aqui"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Ingresa tu contraseña aqui"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Repite tu contraseña aqui"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Ingresa tu nombre y apellido"
                  variant="outlined"
                />
                <div>
                  <Button onClick={() => dispatch(closeLogIn())}>
                    Registrar
                  </Button>
                  <Button onClick={() => setToggleRegister(false)}>
                    Ya tengo cuenta
                  </Button>
                </div>
              </Stack>
            )}
          </MenuSubContainer>
        </MenuContainer>
      )}
    </>
  );
};

export default PopUpMenu;
