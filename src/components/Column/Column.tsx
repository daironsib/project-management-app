import { useDrop } from 'react-dnd';
import { AddBoardImg, AddTaskBtn, RemoveBtn, ColumnBlock, ColumnTitle } from './styles';
import AddButton from '../../assets/images/add-board.svg';
import { IColumn } from '../../types/interfaces';
import { toogleTaskModal } from '../../store/tasksSlice/tasksSlice';
import { useAppDispatch } from '../../hooks';
import { setCurrentColumn } from '../../store/columnsSlice/columnsSlice';

type Props = {
  title?: string,
  data: IColumn,
  children: JSX.Element[],
};

export const Column = ({ children, title, data }: Props) => {
  const dispatch = useAppDispatch();

  const [_, drop] = useDrop({
    accept: 'task',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
  });

  const taskModalOpen = (columnId: string) => {
    dispatch(setCurrentColumn(columnId));
    dispatch(toogleTaskModal(true));
  };

  return (
    <ColumnBlock
      ref={drop}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddTaskBtn onClick={() => taskModalOpen(data._id)}>
        <AddBoardImg src={AddButton} />
      </AddTaskBtn>
      <RemoveBtn>x</RemoveBtn>
    </ColumnBlock>
  );
};
