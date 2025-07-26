export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ISignUpCredentials extends ISignInCredentials {
  name: string;
}
