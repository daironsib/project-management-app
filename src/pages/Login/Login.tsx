import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import {
  ButtonSubmit,
  LinkFormWrapper,
  NavLinkForm,
} from '../../components/Form/styles';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { Loading } from '../../components/Loading/Loading';
import { ROUTES } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userLogin } from '../../store/userSlice/userActions';
import { ISignInForm } from '../../types/interfaces';
import { loginSchema } from '../../validation/validation';

const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(userLogin(data));
    setIsAlertOpen(true);
    reset();
  };

  const handleCloseAlert = useCallback(() => {
    setIsAlertOpen(false);
  }, []);

  return (
    <>
      <Form title='Войти' onSubmit={handleSubmit(onSubmit)}>
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
        <LinkFormWrapper>
          <span>Еще нет аккаунта?</span>
          <NavLinkForm to={ROUTES.registration}>Регистрация</NavLinkForm>
        </LinkFormWrapper>
        <ButtonSubmit>Войти</ButtonSubmit>
      </Form>
      {isLoading ? (
        <Loading />
      ) : (
        <Alert
          message={errorMessage || `Добро пожаловать`}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};

export default Login;
