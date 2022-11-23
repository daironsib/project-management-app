import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { Loading } from '../../components/Loading/Loading';
import { Modal } from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteUser, updateUser } from '../../store/userSlice/userActions';
import { ISignUpForm } from '../../types/interfaces';
import { parseJWT } from '../../utils/utils';
import { registrationSchema } from '../../validation/validation';
import { ButtonDelete, ButtonUpdate, UpdateButtonsWrapper } from './styles';

const EditProfile: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(registrationSchema),
  });
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    const token = localStorage.getItem('token') as string;
    const { id } = parseJWT(token);
    dispatch(updateUser({ id, data }));
    setIsAlertOpen(true);
    reset();
  };

  const handleCloseAlert = useCallback(() => {
    setIsAlertOpen(false);
  }, []);

  const handleDelete = () => {
    setModal(true);
  };

  const deleteProfile = useCallback(() => {
    const token = localStorage.getItem('token') as string;
    const { id } = parseJWT(token);
    dispatch(deleteUser(id));
  }, [dispatch]);

  const setModal = useCallback((isOpen: boolean) => {
    setOpenModal(isOpen);
  }, []);

  return (
    <>
      <Form title='Изменить профиль' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='name'
          render={({ field: { value, onChange } }) => (
            <InputAuth
              onChange={onChange}
              value={value || ''}
              label='Имя'
              type='text'
              error={!!errors.name?.message}
              helperText={errors?.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='login'
          render={({ field: { value, onChange } }) => (
            <InputAuth
              onChange={onChange}
              value={value || ''}
              label='Логин'
              type='text'
              error={!!errors.login?.message}
              helperText={errors?.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { value, onChange } }) => (
            <InputAuth
              onChange={onChange}
              value={value || ''}
              label='Пароль'
              type='password'
              error={!!errors.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        <UpdateButtonsWrapper>
          <ButtonDelete onClick={handleDelete}>Удалить профиль</ButtonDelete>
          <ButtonUpdate>Изменить профиль</ButtonUpdate>
        </UpdateButtonsWrapper>
      </Form>
      {isOpenModal && (
        <Modal
          modalTitle='Вы действительно хотите удалить свой аккаунт?'
          isOpen={isOpenModal}
          setModal={setModal}
          dispatch={deleteProfile}
        />
      )}
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <Alert
          message={errorMessage || `Пользователь успешно изменён`}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};

export default EditProfile