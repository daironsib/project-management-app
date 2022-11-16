import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { Loading } from '../../components/Loading/Loading';
import { ROUTES } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userLogin } from '../../store/userSlice/userSlice';
import { ISignUpForm } from '../../types/interfaces';
import { loginSchema } from '../../validation/validation';

export const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    setIsAlertOpen(true);
    dispatch(userLogin(data));
    reset();
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <>
      <Form
        title='Войти'
        onSubmit={handleSubmit(onSubmit)}
        buttonTitle='Войти'
        linkDescription='Еще нет аккаунта?'
        path={ROUTES.registration}
        linkTitle='Регистрация'
      >
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
          message={errorMessage}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};
