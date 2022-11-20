import React from 'react';
import {
  BoardOverlay,
  BoardWindow,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  DeleteImg,
  DelBoard,
} from './style';
import Image from '../../assets/images/warning.png';

const DeleteBoard = () => {
  return (
    <BoardOverlay>
      <BoardWindow>
        <DeleteImg src={Image} alt='warning' />
        <DelBoard>Are you sure?</DelBoard>
        <ButtonBlock>
          <ButtonContinue>DELETE</ButtonContinue>
          <ButtonCancel>CANCEL</ButtonCancel>
        </ButtonBlock>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default DeleteBoard;
