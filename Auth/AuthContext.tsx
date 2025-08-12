import { IUser } from '@models/Users.interface';
import { createContext } from 'react';
import { ISignInCredentials, ISignUpCredentials } from './Auth.interface';

interface AuthContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;
  SignInWithEmailAndPassword: (
    credentials: ISignInCredentials,
  ) => Promise<{ success: boolean; user?: object; error?: string }>;
  SignOut: () => Promise<{ success: boolean; error?: string }>;
  SignUpWithEmailAndPassword: (
    credentials: ISignUpCredentials,
  ) => Promise<{ success: boolean; user?: object; error?: string }>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
