import styled from "styled-components";
import { Box, Button, TextField } from "@mui/material";

export const FormRegistration = styled(Box).attrs({ component: "form" })`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 450px;
  padding: 20px 10px;
  width: 100%;
`;

export const InputForm = styled(TextField).attrs({
  fullWidth: true,
  margin: "normal",
  InputLabelProps: { style: { fontSize: "20px" }, variant: "outlined" },
})`
  &&.MuiTextField-root div {
    font-size: 2rem;
  }
  &&.MuiTextField-root p {
    font-size: 1.5rem;
  }
`;

export const ButtonSubmit = styled(Button).attrs({
  type: "submit",
  variant: "contained",
  fullWidth: true,
  disableElevation: true,
})`
  && {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`;
