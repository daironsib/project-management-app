import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Title = styled(Typography).attrs({
  variant: 'h3',
  component: 'div',
})`
  &&.MuiTypography-root {
    margin: 2rem 0;
  }
`;

export const FormRegistration = styled(Box).attrs({ component: 'form' })`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 0 auto;
  max-width: 450px;
  padding: 20px 10px;
  width: 100%;
`;
