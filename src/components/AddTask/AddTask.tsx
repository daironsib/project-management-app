import { useAppDispatch, useAppSelector } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITaskAPI } from '../../types/interfaces';
import { useParams } from 'react-router-dom';
import { BoardOverlay, BoardWindow, ButtonBlock, ButtonCancel, ButtonContinue, CreateBoard, ErrorMessage, InputName } from '../AddBoard/style';
import { toogleTaskModal } from '../../store/tasksSlice/tasksSlice';
import { addTask } from '../../store/tasksSlice/tasksActions';
import { parseJWT } from '../../utils/utils';

interface IAddTask {
  // columnId: string | undefined;
  isOpened: boolean;
}
export const AddTask = ({ isOpened }: IAddTask) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<any>();
  const dispatch = useAppDispatch();

  const { currentColumn } = useAppSelector((state) => state.columns);

  const closeModal = () => {
    dispatch(toogleTaskModal(false));
  };

  const { error, errorMessage } = useAppSelector(
    (state) => state.tasks
  );

  const clickHandler: SubmitHandler<ITaskAPI> = (data: ITaskAPI) => {
    data.order = 0;
    data.userId = parseJWT(localStorage.getItem('token')!).id;
    data.users = [parseJWT(localStorage.getItem('token')!).id];
    console.log('data', data);
    console.log('boardid', id);
    console.log('columnid', currentColumn);
    if (id && currentColumn) {
      dispatch(addTask({ boardId: id, columnId: currentColumn, data }));
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
