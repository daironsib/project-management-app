import React, { useEffect } from 'react';
import { BoardsBlock, BoardList, AddBoardButton, AddBoardImg } from './style';
import AddButton from '../../assets/images/add-board.svg';
import AddBoard from '../../components/AddBoard/AddBoard';
import { parseJWT } from '../../utils/utils';
import EditBoard from '../../components/EditBoard/EditBoard';
import DeleteBoard from '../../components/DeleteBoard/DeleteBoard';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeIsCreateModalOpened,
  getBoards,
} from '../../../src/store/boardSlice/boardSlice';
import BoardPreview from '../../components/BoardPreview/BoardPreview';
import { Loading } from '../../components/Loading/Loading';
import { ErrorMessage } from './style';

const Boards = () => {
  const {
    isCreateModalOpened,
    boards,
    shouldLoadBoards,
    loadingBoards,
    errorBoards,
    errorBoardsMessage,
  } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (shouldLoadBoards) {
      dispatch(getBoards(parseJWT(localStorage.getItem('token')!).id));
    }
  }, [shouldLoadBoards, dispatch]);
  const createModalOpen = () => {
    dispatch(changeIsCreateModalOpened(true));
  };
  const view = boards.map((board) => {
    return <BoardPreview key={board.id} title={board.title}></BoardPreview>;
  });
  return (
    <BoardsBlock>
      <BoardList>
        {loadingBoards ? (
          <Loading isLoading />
        ) : errorBoards ? (
          <ErrorMessage>{errorBoardsMessage} </ErrorMessage>
        ) : (
          <ul>{view}</ul>
        )}
        <AddBoardButton onClick={createModalOpen}>
          <AddBoardImg src={AddButton} alt='add' />
        </AddBoardButton>
        <AddBoard isOpened={isCreateModalOpened}></AddBoard>
        <EditBoard></EditBoard>
        <DeleteBoard></DeleteBoard>
      </BoardList>
    </BoardsBlock>
  );
};

export default Boards;
