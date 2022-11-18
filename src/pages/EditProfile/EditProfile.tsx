import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '../../components/Form/Form';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { ISignUpForm } from '../../types/interfaces';
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

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    reset();
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
          <ButtonDelete>Удалить профиль</ButtonDelete>
          <ButtonUpdate>Изменить профиль</ButtonUpdate>
        </UpdateButtonsWrapper>
      </Form>
    </>
  );
};
