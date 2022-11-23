import React from 'react';
import {
  BoardsBlock,
  BoardList,
  BoardCard,
  EditImg,
  BinImg,
  KanbanImg,
  CardName,
  Images,
  NameBlock,
  CardBlock,
  BoardDescription,
  AddBoardButton,
  AddBoardImg,
} from './style';
import EditImage from '../../assets/images/edit.svg';
import BinImage from '../../assets/images/bin.svg';
import KanbanImage from '../../assets/images/kanban.png';
import AddButton from '../../assets/images/add-board.svg';
import AddBoard from '../../components/AddBoard/AddBoard';
import EditBoard from '../../components/EditBoard/EditBoard';
import DeleteBoard from '../../components/DeleteBoard/DeleteBoard';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsCreateModalOpened } from '../../../src/store/boardSlice/boardSlice';

const Boards = () => {
  const { isCreateModalOpened } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();
  const createModalOpen = () => {
    dispatch(changeIsCreateModalOpened(true));
  };
  return (
    <BoardsBlock>
      <BoardList>
        <BoardCard>
          <KanbanImg src={KanbanImage} alt='kanban' />
          <CardBlock>
            <NameBlock>
              <CardName>Name of board</CardName>
              <Images>
                <a href='/edit'>
                  <EditImg src={EditImage} alt='edit' />
                </a>
                <a href='/delete'>
                  <BinImg src={BinImage} alt='bin' />
                </a>
              </Images>
            </NameBlock>
            <BoardDescription>Description</BoardDescription>
          </CardBlock>
        </BoardCard>
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
