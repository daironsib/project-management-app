import ModalUI from '@mui/material/Modal';
import {
  BoxModal,
  ButtonModal,
  ButtonModalWrapper,
  TitleModal,
} from './styles';

interface ModalProps {
  modalTitle: string;
  isOpen: boolean;
  setModal: (isOpen: boolean) => void;
  dispatch: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalTitle,
  isOpen,
  setModal,
  dispatch,
}) => {
  const handleCancel = () => {
    setModal(false);
  };

  const handleConfirm = () => {
    dispatch();
    setModal(false);
  };

  return (
    <ModalUI open={isOpen} onClose={handleCancel}>
      <BoxModal>
        <TitleModal>{modalTitle}</TitleModal>
        <ButtonModalWrapper>
          <ButtonModal onClick={handleCancel}>Отменить</ButtonModal>
          <ButtonModal onClick={handleConfirm}>Подтвердить</ButtonModal>
        </ButtonModalWrapper>
      </BoxModal>
    </ModalUI>
  );
};
