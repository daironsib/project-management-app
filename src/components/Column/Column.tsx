import { useDrop } from 'react-dnd';
import { AddBoardImg, AddTaskBtn, RemoveBtn, ColumnBlock, ColumnTitle } from './styles';
import AddButton from '../../assets/images/add-board.svg';
import { IColumn } from '../../types/interfaces';
import { toogleTaskModal } from '../../store/tasksSlice/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentColumn, toogleDeleteColumnModal } from '../../store/columnsSlice/columnsSlice';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useCallback } from 'react';
import { deleteColumn } from '../../store/columnsSlice/columnsActions';
import { useParams } from 'react-router-dom';

type Props = {
  data: IColumn,
  children: JSX.Element[],
};

export const Column = ({ children, data }: Props) => {
  const { isColDeleteModalOpen, currentColumn } = useAppSelector((state) => state.columns);
  const dispatch = useAppDispatch();
  const boardId = useParams().id;

  const [_, drop] = useDrop({
    accept: 'task',
    drop: () => ({ newColumnId: data._id, children }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
  });

  const taskModalOpen = useCallback(() => {
    dispatch(setCurrentColumn(data._id));
    dispatch(toogleTaskModal(true));
  }, [data._id, dispatch]);

  const deleteColModalOpen = useCallback(() => {
    dispatch(setCurrentColumn(data._id));
    dispatch(toogleDeleteColumnModal(true));
  }, [data._id, dispatch]);

  const closeModal = useCallback(() => {
    dispatch(toogleDeleteColumnModal(false));
  }, [dispatch]);

  const deleteColumnHandler = () => {
    if (boardId) {
      dispatch(deleteColumn({ boardId, columnId: currentColumn } ));
    }

    closeModal();
  };

  return (
    <ColumnBlock
      ref={drop}
    >
      <ColumnTitle>{data.title}</ColumnTitle>
      {children}
      <AddTaskBtn onClick={() => taskModalOpen()}>
        <AddBoardImg src={AddButton} />
      </AddTaskBtn>
      <RemoveBtn onClick={() => deleteColModalOpen()}>x</RemoveBtn>
      {
        isColDeleteModalOpen && 
        <DeleteModal
          isOpened={isColDeleteModalOpen}
          dispatch={deleteColumnHandler}
          closeModal={closeModal}
        />
      }
    </ColumnBlock>
  );
};
