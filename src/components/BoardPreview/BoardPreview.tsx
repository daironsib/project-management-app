import React from 'react';
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

interface IProps {
  title: string;
}
const BoardPreview = ({ title }: IProps) => {
  return (
    <BoardCard>
      <KanbanImg src={KanbanImage} alt='kanban' />
      <CardBlock>
        <NameBlock>
          <CardName>{title}</CardName>
          <Images>
            <a href='/edit'>
              <EditImg src={EditImage} alt='edit' />
            </a>
            <a href='/delete'>
              <BinImg src={BinImage} alt='bin' />
            </a>
          </Images>
        </NameBlock>
      </CardBlock>
    </BoardCard>
  );
};

export default BoardPreview;
