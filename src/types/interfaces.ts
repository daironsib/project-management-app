export interface ISignUpForm {
  name: string;
  login: string;
  password: string;
}

export interface ISignInForm {
  login: string;
  password: string;
}

export interface IBoard {
  title: string;
  owner: string;
}
