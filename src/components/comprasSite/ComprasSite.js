import React from "react";
import {
  BoldSpan,
  BoxStyled,
  ComprasContainer,
  ItemsContainerStyled,
  ItemsNameStyled,
  NameQuanityStyled,
  TotalPriceContainer,
} from "./ComprasSiteStyles";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearCompras } from "../../actions/comprasActions";

const ComprasSite = () => {
  const state = useSelector((state) => state.compras);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <ComprasContainer>
      <Typography variant="h4" color="error" fontWeight="bold">
        Tus Compras
      </Typography>
      <Button
        onClick={() => {
          dispatch(clearCompras());
          alert("Borrando el historial...");
        }}
      >
        Borrar Historial
      </Button>

      {state.compras.map((items) => {
        return (
          <BoxStyled>
            <ItemsContainerStyled>
              {items.map((item) => {
                return (
                  <>
                    <ItemsNameStyled>
                      <NameQuanityStyled style={{ display: "flex" }}>
                        <Typography color="error" fontWeight="bold">
                          {item.name}
                        </Typography>
                        <p>
                          x <BoldSpan>{item.quantity}</BoldSpan>
                        </p>
                      </NameQuanityStyled>
                    </ItemsNameStyled>
                  </>
                );
              })}
              <Typography>
                Estado Actual:{" "}
                <Typography fontWeight="bold">Pending</Typography>{" "}
              </Typography>
            </ItemsContainerStyled>
          </BoxStyled>
        );
      })}
    </ComprasContainer>
  );
};

export default ComprasSite;
