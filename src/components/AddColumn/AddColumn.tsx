import { useAppDispatch, useAppSelector } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  BoardOverlay,
  BoardWindow,
  InputName,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  CreateBoard,
  ErrorMessage,
} from './styles';
import { IColumn } from '../../types/interfaces';
import { toogleColumnModal } from '../../store/columnsSlice/columnsSlice';
import { useParams } from 'react-router-dom';
import { addColumn } from '../../store/columnsSlice/columnsActions';

interface IAddBoard {
  isOpened: boolean;
}
export const AddColumn = ({ isOpened }: IAddBoard) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<IColumn>();
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(toogleColumnModal(false));
  };

  const { error, errorMessage } = useAppSelector(
    (state) => state.columns
  );

  const clickHandler: SubmitHandler<IColumn> = (data: IColumn) => {
    data.order = 0;
    if (id) {
      dispatch(addColumn({ id, data }));
      reset();
    }
  };
  
  return (
    <BoardOverlay isOpened={isOpened}>
      <form onSubmit={handleSubmit(clickHandler)}>
        <BoardWindow>
          <CreateBoard>CREATE COLUMN</CreateBoard>
          <InputName {...register('title')} type='text' placeholder='NAME' />
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
