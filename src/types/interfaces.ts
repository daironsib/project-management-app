export interface ISignUpForm {
  name: string;
  login: string;
  password: string;
}

export interface ISignInForm {
  login: string;
  password: string;
}

export interface ITask {
  column: string;
  id: number;
  name: string;
}

export interface IDnDItem {
  index?: number;
  name?: string;
  currentColumnName?: string;
  type?: string;
}

export interface IdropResult {
  dropEffect: string;
  name: string;
}