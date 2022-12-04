import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IAddEditModal } from '../../types/interfaces';
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
  description?: boolean;
  isOpened: boolean;
  closeModal: () => void;
  dispatch: Function;
}

export const AddEditModal: React.FC<IAddBoard> = ({
  title,
  description,
  isOpened,
  closeModal,
  dispatch,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'addEditModal' });
  const { register, handleSubmit, reset } = useForm();

  const createModalClose = () => {
    closeModal();
  };

  const clickHandler: SubmitHandler<IAddEditModal> = (data: IAddEditModal) => {
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
          <InputName {...register('title', { required: true })} type='text' placeholder='NAME' />
          {
            description && 
            <InputName {...register('description')} type='text' placeholder='DESCRIPTION' />
          }
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
