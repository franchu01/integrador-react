import { Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import {
  BigContainer,
  BigSubContainer,
  CreateAccountStyled,
} from "./RegisterMenuStyles";
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
    } else {
      areInputsIncomplete.current = true;
    }
    var formData = localStorage.getItem("formData");
    console.log(formData);
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear objeto con los datos del formulario
    const formData = {
      name,
      email,
      password,
    };

    // Guardar los datos del formulario en el almacenamiento local
    localStorage.setItem("formData", JSON.stringify(formData));
    dispatch(logInUser());
    navigate("/");
  };
  // Falta arreglar que se muestre en nombre, creo que es porque algo del submit funca mal
  return (
    <BigContainer>
      <form onSubmit={handleSubmit}>
        <BigSubContainer>
          <CreateAccountStyled fontSize="30px">
            Crear Cuenta
          </CreateAccountStyled>
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
          <Button type="submit" disabled={areInputsIncomplete.current}>
            Unirse
          </Button>
        </BigSubContainer>
      </form>
    </BigContainer>
  );
};

export default RegisterMenu;
