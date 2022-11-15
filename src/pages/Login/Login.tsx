import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '../../components/Form/Form';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { ROUTES } from '../../constants/constants';
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

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    reset();
  };

  return (
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
  );
};
