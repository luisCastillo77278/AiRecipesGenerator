import { createContext } from "react";
import { ISignInCredentials, ISignUpCredentials, IUser } from "../models/Users.interface";

interface AuthContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;
  SignIn: (credentials: ISignInCredentials) => Promise<{ success: boolean; user?: object; error?: string }>;
  SignOut: () => Promise<{ success: boolean; error?: string }>;
  SignUp: (credentials: ISignUpCredentials) => Promise<{ success: boolean; user?: object; error?: string }>;
}

export const AuthContext = createContext<AuthContextType | null>(null);