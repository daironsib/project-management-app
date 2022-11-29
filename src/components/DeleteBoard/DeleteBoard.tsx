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
import { removeBoard } from '../../store/boardSlice/boardSlice';
import { useAppDispatch } from '../../hooks';

interface IProps {
  isOpened: boolean;
  boardId?: string;
  closeModal: () => void;
}

const DeleteBoard = ({ isOpened, boardId, closeModal }: IProps) => {
  const dispatch = useAppDispatch();
  const handleCancelClick = () => {
    closeModal();
  };
  const handleContinueClick = () => {
    if (boardId) {
      dispatch(removeBoard(boardId));
    }
  };
  return (
    <BoardOverlay isOpened={isOpened}>
      <BoardWindow>
        <DeleteImg src={Image} alt='warning' />
        <DelBoard>Are you sure?</DelBoard>
        <ButtonBlock>
          <ButtonContinue onClick={handleContinueClick}>DELETE</ButtonContinue>
          <ButtonCancel onClick={handleCancelClick}>CANCEL</ButtonCancel>
        </ButtonBlock>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default DeleteBoard;
