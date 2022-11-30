import React from 'react';
import { useAppDispatch } from '../../hooks';
import { editBoards } from '../../store/boardSlice/boardSlice';
import {
  BoardOverlay,
  BoardWindow,
  InputName,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  CreateBoard,
} from './style';
import { parseJWT } from '../../utils/utils';
import { useForm } from 'react-hook-form';
import { IEditBoard } from '../../types/interfaces';
import { SubmitHandler } from 'react-hook-form';
import { useAppSelector } from '../../hooks';
import { ErrorMessage } from '../../pages/Boards/style';

interface IProps {
  isOpened: boolean;
  boardId: string;
  closeModal: () => void;
}

const AddBoard = ({ isOpened, boardId, closeModal }: IProps) => {
  const dispatch = useAppDispatch();
  const handleCancelClick = () => {
    closeModal();
  };
  const { register, reset, handleSubmit } = useForm<IEditBoard>();
  const clickHandler: SubmitHandler<IEditBoard> = (data: IEditBoard) => {
    dispatch(editBoards(data));
    reset();
  };
  const { isEditLoadingError } = useAppSelector((state) => state.board);
  return (
    <BoardOverlay isOpened={isOpened}>
      <BoardWindow>
        <form onSubmit={handleSubmit(clickHandler)}>
          <CreateBoard>EDIT BOARD</CreateBoard>
          <InputName type='text' placeholder='NAME' {...register('title')} />
          {isEditLoadingError ? (
            <ErrorMessage>Something went wrong</ErrorMessage>
          ) : null}
          <input
            {...register('owner')}
            type='hidden'
            value={parseJWT(localStorage.getItem('token')!).id}
          />
          <input type='hidden' {...register('boardId')} value={boardId} />
          <ButtonBlock>
            <ButtonContinue type='submit'>CONTINUE</ButtonContinue>
            <ButtonCancel type='button' onClick={handleCancelClick}>
              CANCEL
            </ButtonCancel>
          </ButtonBlock>
        </form>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default AddBoard;
