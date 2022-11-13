const REQUIRED_FIELD = "Обязательно для заполнения";

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[1-9]/)) {
      return "Имя не может содержать цифры";
    }
    if (value.length <= 1) {
      return "Имя должно содержать не менее 2 символов";
    }
    return true;
  },
};
export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин не может содержать русские буквы";
    }
    if (value.length <= 1) {
      return "Логин должен содержать не менее 2 символов";
    }
    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return "Пароль должен coдержать не менее 6-ти символов";
    }
    if (!value.match(/[1-9]/)) {
      return "Пароль должен содержать хотя-бы одну цифру";
    }
    return true;
  },
};
