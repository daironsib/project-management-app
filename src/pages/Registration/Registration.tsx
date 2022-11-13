import React from "react";
import Typography from "@mui/material/Typography";
import { ButtonSubmit, FormRegistration, InputForm } from "./styles";
import {
  Controller,
  useForm,
  useFormState,
  SubmitHandler,
} from "react-hook-form";
import {
  loginValidation,
  nameValidation,
  passwordValidation,
} from "../../validation/validation";

interface ISignUpForm {
  name: string;
  login: string;
  password: string;
}

export const Registration: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<ISignUpForm>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Typography variant="h3" component="div" sx={{ margin: "2rem 0" }}>
        Регистрация
      </Typography>
      <FormRegistration onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={nameValidation}
          render={({ field: { value, onChange } }) => (
            <InputForm
              label="Имя"
              onChange={onChange}
              value={value || ""}
              error={!!errors.name?.message}
              helperText={errors?.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field: { value, onChange } }) => (
            <InputForm
              label="Логин"
              onChange={onChange}
              value={value || ""}
              error={!!errors.login?.message}
              helperText={errors?.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field: { value, onChange } }) => (
            <InputForm
              label="Пароль"
              onChange={onChange}
              value={value || ""}
              type="password"
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        <ButtonSubmit 
        >
          Войти
        </ButtonSubmit>
      </FormRegistration>
    </div>
  );
};
