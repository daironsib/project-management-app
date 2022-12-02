import { useAppDispatch, useAppSelector } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITaskAPI } from '../../types/interfaces';
import { useParams } from 'react-router-dom';
import { BoardOverlay, BoardWindow, ButtonBlock, ButtonCancel, ButtonContinue, CreateBoard, ErrorMessage, InputName } from '../AddBoard/style';
import { toogleTaskModal } from '../../store/tasksSlice/tasksSlice';
import { addTask } from '../../store/tasksSlice/tasksActions';
import { parseJWT } from '../../utils/utils';

interface IAddTask {
  isOpened: boolean;
}
export const AddTask = ({ isOpened }: IAddTask) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<any>();
  const dispatch = useAppDispatch();
  const { tasks, error, errorMessage } = useAppSelector((state) => state.tasks);
  const { currentColumn } = useAppSelector((state) => state.columns);
  const taskCounter = tasks.filter(task => task.columnId === currentColumn).length;
  const newOrder = taskCounter === 0 ? 0 : taskCounter;

  const closeModal = () => {
    dispatch(toogleTaskModal(false));
  };

  const clickHandler: SubmitHandler<ITaskAPI> = (data: ITaskAPI) => {
    if (id && currentColumn) {
      if (data.title && data.description) {
        data.order = newOrder;
        dispatch(addTask({ boardId: id, columnId: currentColumn, data }));
      }
      
      reset();
    }
  };
  
  return (
    <BoardOverlay isOpened={isOpened}>
      <form onSubmit={handleSubmit(clickHandler)}>
        <BoardWindow>
          <CreateBoard>CREATE TASK</CreateBoard>
          <InputName {...register('title')} type='text' placeholder='NAME' />
          <InputName {...register('description')} type='text' placeholder='DESCRIPTION' />
          <input {...register('userId')} type='hidden' value={parseJWT(localStorage.getItem('token')!).id} />
          <input {...register('users')} type='hidden' value={[parseJWT(localStorage.getItem('token')!).id]} />
          { error && <ErrorMessage>{errorMessage}</ErrorMessage> }
          <ButtonBlock>
            <ButtonContinue type='submit'>CONTINUE</ButtonContinue>
            <ButtonCancel onClick={closeModal}>CANCEL</ButtonCancel>
          </ButtonBlock>
        </BoardWindow>
      </form>
    </BoardOverlay>
  );
};
