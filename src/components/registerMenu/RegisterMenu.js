import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { BigContainer, BigSubContainer } from "./RegisterMenuStyles";
import { useDispatch } from "react-redux";
import { logInUser } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const RegisterMenu = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  var areInputsIncomplete = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (email && password && name) {
      areInputsIncomplete.current = false;
      console.log("hola");
    } else {
      areInputsIncomplete.current = true;
      console.log("holasdasa");
    }
  });

  const navigate = useNavigate();

  return (
    <BigContainer>
      <BigSubContainer>
        <Typography fontSize="30px">Crear Cuenta</Typography>
        <TextField
          id="filled-basic"
          label="Email"
          error
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Contraseña"
          error
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Nombre"
          error
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          disabled={areInputsIncomplete.current}
          onClick={() => {
            dispatch(logInUser());
            navigate("/");
          }}
        >
          Unirse
        </Button>
      </BigSubContainer>
    </BigContainer>
  );
};

export default RegisterMenu;
