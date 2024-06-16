export interface IUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  role: string;
}

export interface IUserSignInForm {
  email: string;
  password: string;
  remember: boolean;
}
