import ButtonMUI from "@mui/material/Button";
import styled from "styled-components";

export const Button = styled(ButtonMUI).attrs({
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