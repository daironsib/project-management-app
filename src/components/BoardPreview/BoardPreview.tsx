import React, { useState } from 'react';
import {
  BoardCard,
  KanbanImg,
  CardBlock,
  NameBlock,
  CardName,
  EditImg,
  Images,
  BinImg,
} from '../../pages/Boards/style';
import EditImage from '../../assets/images/edit.svg';
import BinImage from '../../assets/images/bin.svg';
import KanbanImage from '../../assets/images/kanban.png';
import { useNavigate } from 'react-router-dom';
import EditBoard from '../EditBoard/EditBoard';
import { useAppSelector } from '../../hooks';
import { Loading } from '../Loading/Loading';

interface IProps {
  title: string;
  boardId: string;
}
const BoardPreview = ({ title, boardId }: IProps) => {
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const { isEditLoading } = useAppSelector((state) => state.board);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/board/${boardId}`);
  };

  const closeModal = () => {
    setIsEditModalOpened(false);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditModalOpened(true);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('delete');
  };
  return (
    <>
      {isEditLoading ? (
        <Loading isLoading />
      ) : (
        <EditBoard
          isOpened={isEditModalOpened}
          boardId={boardId}
          closeModal={closeModal}
        ></EditBoard>
      )}
      <BoardCard onClick={handleClick}>
        <KanbanImg src={KanbanImage} alt='kanban' />
        <CardBlock>
          <NameBlock>
            <CardName>{title}</CardName>
            <Images>
              <div onClick={handleEditClick}>
                <EditImg src={EditImage} alt='edit' />
              </div>
              <div onClick={handleDeleteClick}>
                <BinImg src={BinImage} alt='bin' />
              </div>
            </Images>
          </NameBlock>
        </CardBlock>
      </BoardCard>
    </>
  );
};

export default BoardPreview;
