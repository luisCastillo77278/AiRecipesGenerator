import { FC, PropsWithChildren, useState } from "react";
import { IUser } from "../models/Users.interface";
import { ISignInCredentials, ISignUpCredentials } from "./Auth.interface";
import { AuthContext } from "./AuthContext";
import AuthService from "./AuthService";


interface IProps extends PropsWithChildren { }

const AuthProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const SignIn = async (crendentials: ISignInCredentials) => {
    try {
      const response = await AuthService.signInWithEmailAndPassword(crendentials.email, crendentials.password);
      setUser(response.user);
      setIsAuthenticated(true);
      setToken(response.session.access_token);

      return { success: true, user: response.user  };

    } catch (error) {
      console.error("Sign-in failed:", error);
      return { success: false, error: "Sign-in failed" };
    }
  }

  const SignOut = async () => {
    try {
      const response = await AuthService.signOut();
      setIsAuthenticated(false);
      setUser(null);
      setToken(null);
      return { success: response };
    } catch (error) {
      console.error("Sign-out failed:", error);
      return { success: false, error: "Sign-out failed" };
    }
  }

  const SignUp = async (crendentials: ISignUpCredentials) => {
    try {
      const response = await AuthService.signUpWithEmailAndPassword(crendentials.email, crendentials.password);
      setUser(response.user)
      setIsAuthenticated(true);
      setToken(response.session?.access_token ?? null);
      return { success: true, user: crendentials };
    } catch (error) {
      console.error("Sign-up failed:", error);
      return { success: false, error: "Sign-up failed" };
    }
  }

  return <AuthContext value={{
    SignIn,
    SignOut,
    SignUp,
    user,
    isAuthenticated,
    token,
  }}>{children}</AuthContext>
}

export default AuthProvider;