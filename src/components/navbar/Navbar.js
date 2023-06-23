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
import { Button, SwipeableDrawer } from "@mui/material";
import { Person } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state.logUser);
  const dispatch = useDispatch();

  // Logica del Modal

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDrawerOpen = () => {
    if (state.logged) {
      setIsDrawerOpen(true);
    } else {
      alert("Debes crear una cuenta antes...");
    }
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const formData = JSON.parse(localStorage.getItem("formData"));

  // Estilo del modal

  const drawerStyles = {
    height: "auto",
    maxHeight: "90vh",
    overflowY: "auto",
    marginTop: "20vh",
    borderRadius: "8px 0 0 8px",
    width: "80%",
    maxWidth: "400px",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    padding: "10px",
  };

  const buttonStyles = {
    width: "auto",
  };

  // Falta arreglar que se muestre en nombre, creo que es porque algo del submit funca mal

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        PaperProps={{ style: drawerStyles }}
      >
        <h2>Hola {formData?.name.toUpperCase()}!</h2>
        <h3>Nos encanta que te gusten nuestros productos</h3>
        <p>Aqui puedes ver tu historial de compras</p>
        <Button color="error" variant="outlined" sx={buttonStyles}>
          Compras
        </Button>
      </SwipeableDrawer>
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
            <span onClick={handleDrawerOpen}>
              <PersonIcon /> Perfil
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
