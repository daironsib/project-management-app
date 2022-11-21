import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '../../components/Form/Form';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { Modal } from '../../components/Modal/Modal';
import { useAppDispatch,} from '../../hooks';
import { getUser } from '../../store/userSlice/userActions';
import { logOut,} from '../../store/userSlice/userSlice';
import { ISignUpForm } from '../../types/interfaces';
import { parseJWT } from '../../utils/utils';
import { registrationSchema } from '../../validation/validation';
import { ButtonDelete, ButtonUpdate, UpdateButtonsWrapper } from './styles';

export const EditProfile: React.FC = () => {
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { id } = parseJWT(token);
      dispatch(getUser(id));
    }
  }, [dispatch]);

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    reset();
  };

  const handleDelete = () => {
    setModal(true);
  };

  const deleteProfile = () => {
    dispatch(logOut());
  };

  const setModal = (isOpen: boolean) => {
    setOpenModal(isOpen);
  };

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
    </>
  );
};
