import React from 'react';
import { useAppDispatch } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  BoardOverlay,
  BoardWindow,
  InputName,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  CreateBoard,
} from './style';
import { IBoard } from '../../types/interfaces';
import { changeIsCreateModalOpened } from '../../store/boardSlice/boardSlice';
import { parseJWT } from '../../utils/utils';
import { creationOfBoard } from '../../store/boardSlice/boardActions';

interface IAddBoard {
  isOpened: boolean;
}

const AddBoard = React.memo(({ isOpened }: IAddBoard) => {
  const { register, handleSubmit, reset } = useForm<IBoard>();
  const dispatch = useAppDispatch();

  const createModalClose = () => {
    dispatch(changeIsCreateModalOpened(false));
  };

  const clickHandler: SubmitHandler<IBoard> = (data: IBoard) => {
    dispatch(creationOfBoard(data));
    reset();
  };

  return (
    <BoardOverlay isOpened={isOpened}>
      <form onSubmit={handleSubmit(clickHandler)}>
        <BoardWindow>
          <CreateBoard>CREATE BOARD</CreateBoard>
          <InputName
            {...register('title', { required: true })}
            type='text'
            placeholder='NAME'
          />
          <input
            {...register('owner')}
            type='hidden'
            value={parseJWT(localStorage.getItem('token')!).id}
          />
          <ButtonBlock>
            <ButtonContinue>CONTINUE</ButtonContinue>
            <ButtonCancel type='button' onClick={createModalClose}>
              CANCEL
            </ButtonCancel>
          </ButtonBlock>
        </BoardWindow>
      </form>
    </BoardOverlay>
  );
});

export default AddBoard;
