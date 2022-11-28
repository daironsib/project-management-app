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
  ErrorMessage,
} from './style';
import { IBoard } from '../../types/interfaces';
import {
  creationOfBoard,
  changeIsCreateModalOpened,
} from '../../store/boardSlice/boardSlice';
import { Loading } from '../Loading/Loading';
import { parseJWT } from '../../utils/utils';

interface IAddBoard {
  isOpened: boolean;
}
const AddBoard = ({ isOpened }: IAddBoard) => {
  const { register, handleSubmit, reset } = useForm<IBoard>();
  const dispatch = useAppDispatch();
  const createModalClose = () => {
    dispatch(changeIsCreateModalOpened(false));
  };
  const { error, errorMessage, loading } = useAppSelector(
    (state) => state.board
  );
  const clickHandler: SubmitHandler<IBoard> = (data: IBoard) => {
    dispatch(creationOfBoard(data));
    reset();
  };
  return (
    <BoardOverlay isOpened={isOpened}>
      <form onSubmit={handleSubmit(clickHandler)}>
        <BoardWindow>
          <CreateBoard>CREATE BOARD</CreateBoard>
          <InputName {...register('title')} type='text' placeholder='NAME' />
          <input
            {...register('owner')}
            type='hidden'
            value={parseJWT(localStorage.getItem('token')!).id}
          />
          {error ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : loading ? (
            <Loading />
          ) : null}
          <ButtonBlock>
            <ButtonContinue type='submit'>CONTINUE</ButtonContinue>
            <ButtonCancel onClick={createModalClose}>CANCEL</ButtonCancel>
          </ButtonBlock>
        </BoardWindow>
      </form>
    </BoardOverlay>
  );
};

export default AddBoard;
