import { useDrop } from 'react-dnd';
import { AddBoardImg, AddTaskBtn, RemoveBtn, ColumnBlock, ColumnTitle } from './styles';
import AddButton from '../../assets/images/add-board.svg';

type Props = {
  title: string,
  children: JSX.Element[],
};

export const Column = ({ children, title }: Props) => {
  const [_, drop] = useDrop({
    accept: 'task',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
  });

  return (
    <ColumnBlock
      ref={drop}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddTaskBtn>
        <AddBoardImg src={AddButton} />
      </AddTaskBtn>
      <RemoveBtn>x</RemoveBtn>
    </ColumnBlock>
  );
};
