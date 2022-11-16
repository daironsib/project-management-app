import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { registrationSchema } from '../../validation/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpForm } from '../../types/interfaces';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { ROUTES } from '../../constants/constants';
import { Form } from '../../components/Form/Form';
import { useAppDispatch } from '../../hooks';
import { userRegistration } from '../../store/userSlice/userSlice';

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

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    dispatch(userRegistration(data));
    reset();
  };

  return (
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
  );
};
