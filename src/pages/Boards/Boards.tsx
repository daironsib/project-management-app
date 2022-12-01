import React, { useCallback, useEffect } from 'react';
import { BoardsBlock, BoardList, AddBoardButton, AddBoardImg } from './style';
import AddButton from '../../assets/images/add-board.svg';
import AddBoard from '../../components/AddBoard/AddBoard';
import { parseJWT } from '../../utils/utils';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsCreateModalOpened } from '../../../src/store/boardSlice/boardSlice';
import BoardPreview from '../../components/BoardPreview/BoardPreview';
import { Loading } from '../../components/Loading/Loading';
import { ErrorMessage } from './style';
import { getBoards } from '../../store/boardSlice/boardActions';

const Boards = () => {
  const {
    isCreateModalOpened,
    boards,
    shouldLoadBoards,
    errorMessage,
    isLoading,
  } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBoards(parseJWT(localStorage.getItem('token')!).id));
  }, [dispatch]);

  useEffect(() => {
    if (shouldLoadBoards) {
      dispatch(getBoards(parseJWT(localStorage.getItem('token')!).id));
    }
  }, [dispatch, shouldLoadBoards]);

  const createModalOpen = useCallback(() => {
    dispatch(changeIsCreateModalOpened(true));
  }, [dispatch]);

  const view = boards.map((board) => {
    return (
      <BoardPreview key={board._id} boardId={board._id} title={board.title} />
    );
  });

  return (
    <BoardsBlock>
      <BoardList>
        {isLoading && <Loading />}
        {!!errorMessage ? (
          <ErrorMessage>{errorMessage} </ErrorMessage>
        ) : (
          <ul>{view}</ul>
        )}
        <AddBoardButton onClick={createModalOpen}>
          <AddBoardImg src={AddButton} alt='add' />
        </AddBoardButton>
        <AddBoard isOpened={isCreateModalOpened}></AddBoard>
      </BoardList>
    </BoardsBlock>
  );
};

export default Boards;
