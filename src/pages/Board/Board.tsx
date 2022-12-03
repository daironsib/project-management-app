import { useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AddColumnBlock, AddColumnBtn, BoardBlock } from './styles';
import { Task } from '../../components/Task/Task';
import { Column } from '../../components/Column/Column';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { toogleColumnModal } from '../../store/columnsSlice/columnsSlice';
import { AddColumn } from '../../components/AddColumn/AddColumn';
import { getColumns } from '../../store/columnsSlice/columnsActions';
import { getTasks } from '../../store/tasksSlice/tasksActions';
import { AddTask } from '../../components/AddTask/AddTask';

export const BoardPage = () => {
  const { id } = useParams();
  const { columns, isColumnModalOpen } = useAppSelector((state) => state.columns);
  const { tasks, isTaskModalOpen } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const createModalOpen = () => {
    dispatch(toogleColumnModal(true));
  };

  const renderItemsForColumn = useCallback((columnId: string) => {
    return tasks
      .filter(task => task.columnId === columnId)
      .sort((a, b) => a.order - b.order)
      .map((item, i) => (
        <Task
          data={item}
          key={`task-${item._id}`}
          index={i}
        />
      ))
  }, [tasks]);

  useEffect(() => {
    if (id) {
      dispatch(getColumns(id));
      dispatch(getTasks(id));
    }
  }, [dispatch, id]);

  return (
    <BoardBlock>
      <DndProvider backend={HTML5Backend}>
        {
          columns.map((column, i) => 
            <Column data={column} key={`column-${i}'}`}>
              {renderItemsForColumn(column._id)}
            </Column>
          )
        }
        <AddColumnBlock>
          <AddColumnBtn onClick={createModalOpen}>+ Add column</AddColumnBtn> 
        </AddColumnBlock>
        <AddColumn isOpened={isColumnModalOpen}/>
        <AddTask isOpened={isTaskModalOpen} />
      </DndProvider>
    </BoardBlock>
  );
};
