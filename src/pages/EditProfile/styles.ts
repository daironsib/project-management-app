import { Button } from '@mui/material';
import styled from 'styled-components';

export const UpdateButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const ButtonUpdate = styled(Button).attrs({
  type: 'submit',
  variant: 'contained',
  disableElevation: true,
  color: 'success',
})`
  && {
    font-weight: bold;
  }
`;

export const ButtonDelete = styled(Button).attrs({
  variant: 'contained',
  disableElevation: true,
  color: 'error',
})`
  && {
    font-weight: bold;
  }
`;
