import React from "react";
import Title from "../../components/title/Title";
import { Typography } from "@mui/material";

const Error404 = () => {
  return (
    <>
      <Title>
        <Typography variant="h4" color="error" fontWeight="bold">
          Error 404
        </Typography>
        <Typography color="white">Page not found</Typography>
      </Title>
    </>
  );
};

export default Error404;
