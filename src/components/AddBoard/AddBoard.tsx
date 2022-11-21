import React from 'react';
import {
  BoardOverlay,
  BoardWindow,
  InputName,
  InputDescription,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  CreateBoard,
} from './style';

const AddBoard = () => {
  return (
    <BoardOverlay>
      <BoardWindow>
        <CreateBoard>CREATE BOARD</CreateBoard>
        <InputName type='text' placeholder='NAME' />
        <InputDescription placeholder='DESCRIPTION' />
        <ButtonBlock>
          <ButtonContinue>CONTINUE</ButtonContinue>
          <ButtonCancel>CANCEL</ButtonCancel>
        </ButtonBlock>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default AddBoard;
