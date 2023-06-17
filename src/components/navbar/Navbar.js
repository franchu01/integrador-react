import {
  ButtonsContainerStyled,
  DivStyled,
  HoverMenuStyled,
  MenuToggleStyled,
  NavbarStyled,
  ResponsiveProductsMenu,
  TitleStyled,
} from "./NavbarStyles";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../actions/userActions";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state.logUser);
  const dispatch = useDispatch();

  console.log(state);
  return (
    <>
      <NavbarStyled>
        <TitleStyled>VIRTUOUS</TitleStyled>

        <ButtonsContainerStyled>
          <DivStyled></DivStyled>
          <MenuToggleStyled>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Inicio
            </span>
            <span
              onClick={() => {
                navigate("cart");
              }}
            >
              Carrito
            </span>
            <span
              onMouseOver={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              Productos
            </span>
            {open && (
              <HoverMenuStyled
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <p
                  onClick={() => {
                    navigate("category/bermuda");
                  }}
                >
                  Bermudas
                </p>
                <p
                  onClick={() => {
                    navigate("category/buzo");
                  }}
                >
                  Buzos
                </p>
                <p
                  onClick={() => {
                    navigate("category/remera");
                  }}
                >
                  Remeras
                </p>
                <p
                  onClick={() => {
                    navigate("category/sweater");
                  }}
                >
                  Sweaters
                </p>
              </HoverMenuStyled>
            )}
            <span
              onClick={() =>
                alert(
                  "En nuestro pie de pagina encontraras toda la informacion que necesites"
                )
              }
            >
              Contacto
            </span>
            {!state.logged ? (
              <span
                onClick={() => {
                  navigate("register");
                }}
              >
                Crear cuenta
              </span>
            ) : (
              <span
                onClick={() => {
                  dispatch(logOutUser());
                }}
              >
                Salir
              </span>
            )}
          </MenuToggleStyled>
          <DivStyled></DivStyled>
        </ButtonsContainerStyled>

        <ResponsiveProductsMenu>
          <p
            onClick={() => {
              navigate("category/bermuda");
            }}
          >
            BERMUDAS
          </p>
          <p
            onClick={() => {
              navigate("category/buzo");
            }}
          >
            BUZOS
          </p>
          <p
            onClick={() => {
              navigate("category/remera");
            }}
          >
            REMERAS
          </p>
          <p
            onClick={() => {
              navigate("category/sweater");
            }}
          >
            SWEATERS
          </p>
        </ResponsiveProductsMenu>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
