import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TitleForm = styled(Typography).attrs({
  variant: 'h3',
  component: 'div',
})`
  &&.MuiTypography-root {
    margin: 20px 0;
    text-align: center;
  }
`;

export const FormWrapper = styled(Box).attrs({ component: 'form' })`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 450px;
  padding: 20px 10px;
  width: 100%;
`;

export const ButtonSubmit = styled(Button).attrs({
  type: 'submit',
  variant: 'contained',
  disableElevation: true,
})`
  && {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

export const LinkFormWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
  && {
    font-size: 14px;
  }
`;

export const NavLinkForm = styled(NavLink)`
  font-weight: bold;
  color: #1976d2;
  text-decoration: none;
`;
