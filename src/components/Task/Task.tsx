import { useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { COLUMN_NAMES } from '../../constants/constants';
import { IDnDItem, IdropResult, ITask } from '../../types/interfaces';
import { TaskBlock } from './styles';

interface Props {
  name: string;
  index: number;
  currentColumnName: string;
  moveCardHandler: Function;
  setItems: Function;
}

export const Task = ({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setItems
}: Props) => {
  const changeItemColumn = (currentItem: IDnDItem, columnName: string) => {
    setItems((prevState: ITask[]) => {
      return prevState.map((e: ITask) => {
        return {
          ...e,
          column: e.name === currentItem.name ? columnName : e.column
        };
      });
    });
  };

  const ref = useRef<HTMLInputElement>(null);

  const [, drop] = useDrop<IDnDItem>({
    accept: 'task',
    hover(item: IDnDItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      if (clientOffset) {
         const hoverClientY = clientOffset.y - hoverBoundingRect.top;

         if (dragIndex && dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
           return;
         }

         if (dragIndex && dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
           return;
         }
      }

      moveCardHandler(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { index, name, currentColumnName, type: 'task' },
    end: (item, monitor) => {
      const dropResult: IdropResult | null = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
        switch (name) {
          case IN_PROGRESS:
            changeItemColumn(item, IN_PROGRESS);
            break;
          case AWAITING_REVIEW:
            changeItemColumn(item, AWAITING_REVIEW);
            break;
          case DONE:
            changeItemColumn(item, DONE);
            break;
          case DO_IT:
            changeItemColumn(item, DO_IT);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <TaskBlock ref={ref} style={{ opacity }}>
      {name}
    </TaskBlock>
  );
};
