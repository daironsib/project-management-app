import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
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
import { creationOfBoard } from '../../store/boardSlice/boardSlice';

const AddBoard = () => {
  const { register, handleSubmit, reset } = useForm<IBoard>();
  const dispatch = useAppDispatch();
  // const { error, errorMessage } = useAppSelector((state) => state.board);
  const clickHandler: SubmitHandler<IBoard> = (data: IBoard) => {
    dispatch(creationOfBoard(data));
    reset();
  };
  return (
    <BoardOverlay>
      <BoardWindow>
        <CreateBoard>CREATE BOARD</CreateBoard>
        <form onSubmit={handleSubmit(clickHandler)}>
          <InputName {...register('title')} type='text' placeholder='NAME' />
          <input {...register('owner')} type='hidden' value={'hello'} />
          {/* {error ? errorMessage : "it's ok!"} */}
          <ButtonBlock>
            <ButtonContinue type='submit'>CONTINUE</ButtonContinue>
            <ButtonCancel>CANCEL</ButtonCancel>
          </ButtonBlock>
        </form>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default AddBoard;
