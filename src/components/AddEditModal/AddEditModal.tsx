import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IBoard } from '../../types/interfaces';
import { parseJWT } from '../../utils/utils';
import {
  BoardOverlay,
  BoardWindow,
  ButtonBlock,
  ButtonCancel,
  ButtonContinue,
  CreateBoard,
  InputName,
} from './styles';

interface IAddBoard {
  title: string;
  isOpened: boolean;
  closeModal: () => void;
  dispatch: (data: IBoard) => void;
}

export const AddEditModal: React.FC<IAddBoard> = ({
  title,
  isOpened,
  closeModal,
  dispatch,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'addEditModal' });
  const { register, handleSubmit, reset } = useForm<IBoard>();

  const createModalClose = () => {
    closeModal();
  };

  const clickHandler: SubmitHandler<IBoard> = (data: IBoard) => {
    dispatch(data);
    reset();
  };

  return (
    <BoardOverlay
      open={isOpened}
      onClose={createModalClose}
      disableAutoFocus={true}
    >
      <form onSubmit={handleSubmit(clickHandler)}>
        <BoardWindow>
          <CreateBoard>{t(`${title}`)}</CreateBoard>
          <InputName
            {...register('title', { required: true })}
            type='text'
            placeholder='NAME'
          />
          <input
            {...register('owner')}
            type='hidden'
            value={parseJWT(localStorage.getItem('token')!).id}
          />
          <ButtonBlock>
            <ButtonContinue type='submit'>{t('continue')}</ButtonContinue>
            <ButtonCancel type='button' onClick={createModalClose}>
              {t('cancel')}
            </ButtonCancel>
          </ButtonBlock>
        </BoardWindow>
      </form>
    </BoardOverlay>
  );
};
