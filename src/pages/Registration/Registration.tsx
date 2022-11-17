import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { registrationSchema } from '../../validation/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpForm } from '../../types/interfaces';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { ROUTES } from '../../constants/constants';
import { Form } from '../../components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userRegistration } from '../../store/userSlice/userSlice';
import { Loading } from '../../components/Loading/Loading';
import { Alert } from '../../components/Alert/Alert';

export const Registration: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(registrationSchema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    setIsAlertOpen(true);
    dispatch(userRegistration(data));
    reset();
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <>
      <Form
        title='Регистрация'
        onSubmit={handleSubmit(onSubmit)}
        buttonTitle='Регистрация'
        linkDescription='Уже есть аккаунт?'
        path={ROUTES.signIn}
        linkTitle='Войти'
      >
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
      </Form>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <Alert
          message={errorMessage || 'Пользователь успешно зарегестрирован'}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};
