import React from "react";
import { useDispatch } from "react-redux";
import { openLogIn } from "../../actions/toggleLogActions";
import LogMenu from "../logMenu/LogMenu";
import { LogBtnContainerStyled, LogBtnStyled } from "./LogBtnsStyles";

const LogBtns = () => {
  const dispatch = useDispatch();
  return (
    <LogBtnContainerStyled>
      <LogBtnStyled onClick={() => dispatch(openLogIn())}>
        Iniciar Sesion
      </LogBtnStyled>
      <LogMenu />
    </LogBtnContainerStyled>
  );
};

export default LogBtns;
