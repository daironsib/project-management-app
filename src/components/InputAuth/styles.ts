import { TextField } from "@mui/material";
import styled from "styled-components";


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