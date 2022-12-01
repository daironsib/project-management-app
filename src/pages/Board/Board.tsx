import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AddColumnBlock, AddColumnBtn, BoardBlock } from './styles';
import { COLUMN_NAMES } from '../../constants/constants';
import { Task } from '../../components/Task/Task';
import { Column } from '../../components/Column/Column';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { toogleColumnModal } from '../../store/columnsSlice/columnsSlice';
import { AddColumn } from '../../components/AddColumn/AddColumn';
import { getColumns } from '../../store/columnsSlice/columnsActions';
import { getTasks } from '../../store/tasksSlice/tasksActions';
import { AddTask } from '../../components/AddTask/AddTask';

const { DO_IT } = COLUMN_NAMES;
const exampletasks = [
  {id: 1, name: 'Item 1', column: DO_IT},
  {id: 2, name: 'Item 2', column: DO_IT},
  {id: 3, name: 'Item 3', column: DO_IT},
  {id: 4, name: 'Item 4', column: DO_IT},
];

export const BoardPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState(exampletasks);
  const {
    columns,
    shouldLoadColumns,
    isColumnModalOpen,
  } = useAppSelector((state) => state.columns);

  const { tasks, isTaskModalOpen } = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shouldLoadColumns && id) {
      dispatch(getColumns(id));
      dispatch(getTasks(id));
    }
  }, [shouldLoadColumns, dispatch, id]);

  const createModalOpen = () => {
    dispatch(toogleColumnModal(true));
  };

  const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const renderItemsForColumn = (columnName: string) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <Task
          key={item.id}
          name={item.name}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ))
  };

  const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;

  console.log('columns', columns);
  console.log('tasks', tasks);

  return (
    <BoardBlock>
      <DndProvider backend={HTML5Backend}>
        {/* <Column title={DO_IT}>
          {renderItemsForColumn(DO_IT)}
        </Column>
        <Column title={IN_PROGRESS}>
          {renderItemsForColumn(IN_PROGRESS)}
        </Column>
        <Column title={AWAITING_REVIEW}>
          {renderItemsForColumn(AWAITING_REVIEW)}
        </Column>
        <Column title={DONE}>
          {renderItemsForColumn(DONE)}
        </Column> */}

        {
          columns.map((column, i) => 
            <Column data={column} title={DONE} key={`column-${i}'}`}>
              {renderItemsForColumn(DONE)}
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
