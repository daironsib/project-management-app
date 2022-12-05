import { useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AddColumnBlock, AddColumnBtn, BoardBlock } from './styles';
import { Task } from '../../components/Task/Task';
import { Column } from '../../components/Column/Column';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { toogleAddColumnModal } from '../../store/columnsSlice/columnsSlice';
import { getColumns } from '../../store/columnsSlice/columnsActions';
import { addTask, getTasks } from '../../store/tasksSlice/tasksActions';
import { AddEditModal } from '../../components/AddEditModal/AddEditModal';
import { IColumn, ITask } from '../../types/interfaces';
import { addColumn } from '../../store/columnsSlice/columnsActions';
import { toogleAddTaskModal } from '../../store/tasksSlice/tasksSlice';
import { parseJWT } from '../../utils/utils';

export const BoardPage = () => {
  const { id } = useParams();
  const { columns, isColAddModalOpen, currentColumn } = useAppSelector((state) => state.columns);
  const { tasks, isTaskAddModalOpen } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const createModalOpen = useCallback(() => {
    dispatch(toogleAddColumnModal(true));
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(toogleAddColumnModal(false));
    dispatch(toogleAddTaskModal(false));
  }, [dispatch]);

  const addColumnHandler = useCallback(
    (data: IColumn) => {
      if (id) {
        dispatch(addColumn({ id, data: { ...data, order: 0 } }));
        closeModal();
      }
    },
    [closeModal, dispatch, id]
  );

  const addTaskHandler = useCallback(
    (data: ITask) => {
      if (id && currentColumn) {
        const taskCounter = tasks.filter(task => task.columnId === currentColumn).length;
        const newOrder = taskCounter === 0 ? 0 : taskCounter;
        const userId = parseJWT(localStorage.getItem('token')!).id;
        
        if (data.title && data.description) {
          data.order = newOrder;
          dispatch(addTask({ boardId: id, columnId: currentColumn, data: { ...data, userId, users: [userId] } }));
          closeModal();
        }
      }
    },
    [closeModal, currentColumn, dispatch, id, tasks]
  );

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
        <AddEditModal
          title={'titleColumnAdd'}
          isOpened={isColAddModalOpen}
          closeModal={closeModal}
          dispatch={addColumnHandler}
        />
        <AddEditModal
          title={'titleTaskAdd'}
          description={true}
          isOpened={isTaskAddModalOpen}
          closeModal={closeModal}
          dispatch={addTaskHandler}
        />
      </DndProvider>
    </BoardBlock>
  );
};
