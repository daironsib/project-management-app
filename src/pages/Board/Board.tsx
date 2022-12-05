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
import { setTaskDetails, toogleAddTaskModal, toogleTaskDetailsModal } from '../../store/tasksSlice/tasksSlice';
import { parseJWT } from '../../utils/utils';
import TaskDetails from '../../components/TaskDetails/TaskDetails';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';

export const BoardPage = () => {
  const { id } = useParams();
  const { columns, isColAddModalOpen, currentColumn } = useAppSelector((state) => state.columns);
  const { tasks, isTaskAddModalOpen, isTaskDetailsOpen } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const createModalOpen = useCallback(() => {
    dispatch(toogleAddColumnModal(true));
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(toogleAddColumnModal(false));
    dispatch(toogleAddTaskModal(false));
  }, [dispatch]);

  const closeTaskDetails = useCallback(() => {
    dispatch(toogleTaskDetailsModal(false));
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
        const taskCounter = tasks.filter(
          (task) => task.columnId === currentColumn
        ).length;
        const newOrder = taskCounter === 0 ? 0 : taskCounter;
        const userId = parseJWT(localStorage.getItem('token')!).id;

        if (data.title && data.description) {
          data.order = newOrder;
          dispatch(
            addTask({
              boardId: id,
              columnId: currentColumn,
              data: { ...data, userId, users: [userId] },
            })
          );
          closeModal();
        }
      }
    },
    [closeModal, currentColumn, dispatch, id, tasks]
  );

  const openTaskDetails = useCallback((data: ITask) => {
    dispatch(setTaskDetails(data));
    dispatch(toogleTaskDetailsModal(true));
  }, [dispatch]);

  const renderItemsForColumn = useCallback((columnId: string) => {
    return tasks
      .filter(task => task.columnId === columnId)
      .sort((a, b) => a.order - b.order)
      .map((item, i) => (
        <Task
          data={item}
          key={`task-${item._id}`}
          index={i}
          onClick={openTaskDetails}
        />
      ))
  }, [openTaskDetails, tasks]);

  useEffect(() => {
    if (id) {
      dispatch(getColumns(id));
      dispatch(getTasks(id));
    }
  }, [dispatch, id]);

  function handleDragEnd(event: { active: any; over: any }) {
    console.log('Drag end called');
    const { active, over } = event;
    console.log(active);
    console.log(over);

    if (active.id !== over.id) {
      // const prevColumn = columns[active.id - 1];
      // const column = columns[over.id - 1];
      // console.log(prevColumn, column);
      // setLanguages((items) => {
      //   const activeIndex = items.indexOf(active.id);
      //   const overIndex = items.indexOf(over.id);
      //   console.log(activeIndex, overIndex);
      //   console.log(arrayMove(items, activeIndex, overIndex));
      //   return arrayMove(items, activeIndex, overIndex);
      //   // items: [2, 3, 1]   0  -> 2
      //   // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1]
      // });
    }
  }

  return (
    <BoardBlock>
      <DndProvider backend={HTML5Backend}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          autoScroll={false}
        >
          <SortableContext
            items={columns.map((el) => el.order)}
            strategy={horizontalListSortingStrategy}
          >
            {columns
              // .sort((a, b) => a.order - b.order)
              .map((column, i) => (
                <Column data={column} key={`column-${i}'}`}>
                  {renderItemsForColumn(column._id)}
                </Column>
              ))}
          </SortableContext>
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
        {
          isTaskDetailsOpen && 
          <TaskDetails
            isOpened={isTaskDetailsOpen}
            closeModal={closeTaskDetails}
          />
        }
        </DndContext>
      </DndProvider>
    </BoardBlock>
  );
};
