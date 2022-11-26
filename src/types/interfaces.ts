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

export interface UserUpdateInterface {
  id: string;
  data: ISignUpForm;
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

export interface IBoardGot {
  title: string;
  owner: string;
  _id: string;
  users: [];
}

export interface IEditBoard {
  boardId: string;
  title: string;
  owner: string;
}
