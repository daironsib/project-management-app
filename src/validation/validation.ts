import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Обязательно для заполнения')
    .matches(/^[a-zA-Z]+$/, 'Имя должно содержать только латинские буквы')
    .min(2, 'Имя должно содержать не менее 2 символов'),
  login: yup
    .string()
    .required('Обязательно для заполнения')
    .matches(/^[a-zA-Z]+$/, 'Имя должно содержать только латинские буквы')
    .min(2, 'Логин должен содержать не менее 2 символов'),
  password: yup
    .string()
    .min(6, 'Пароль должен coдержать не менее 6-ти символов')
    .required('Обязательно для заполнения'),
});
