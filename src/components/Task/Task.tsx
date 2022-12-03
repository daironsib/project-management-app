import { useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { updateTask } from '../../store/tasksSlice/tasksActions';
import { IDnDItem, IdropResult, ITaskAPI } from '../../types/interfaces';
import { RemoveBtn, TaskBlock } from './styles';

interface Props {
  data: ITaskAPI;
  index: number;
}

export const Task = ({ data, index }: Props) => {
  const { _id, title, order, columnId, description, userId, users } = data;
  const boardId = useParams().id;
  const dispatch = useAppDispatch();

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

      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { index, title, _id, columnId, type: 'task' },
    end: (item, monitor) => {
      const dropResult: IdropResult | null = monitor.getDropResult();

      if (dropResult && boardId) {
        const { _id } = item;
        const order = item.index;
        const columnId = dropResult.newColumnId;

        if (dropResult.children.length > order) {
          console.log(order);
          const prevTask = dropResult?.children[order].props.data;

          dispatch(updateTask({ boardId, columnId, taskId: prevTask._id, data: { 
            title: prevTask.title,
            description: prevTask.description,
            columnId: prevTask.columnId,
            userId: prevTask.userId,
            users: prevTask.users,
            order: prevTask.order - 1 
          }}));
        }

        dispatch(updateTask({ boardId, columnId, taskId: _id, data: { title, order, description, columnId, userId, users }}));
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
      {title}
      <RemoveBtn>x</RemoveBtn>
    </TaskBlock>
  );
};
