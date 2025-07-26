import { FC, PropsWithChildren, useState } from "react";
import { IUser } from "../models/Users.interface";
import { ISignInCredentials, ISignUpCredentials } from "./Auth.interface";
import { AuthContext } from "./AuthContext";

interface IProps extends PropsWithChildren { }

const AuthProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const SignIn = async (crendentials: ISignInCredentials) => {
    try {
      console.log("Signing in...");
      setUser({ id: 1, name: "John Doe", email: crendentials.email });
      setIsAuthenticated(true);
      setToken("sample-token-12345");

      return { success: true, user: { id: 1, name: "John Doe", email: crendentials.email } };

    } catch (error) {
      console.error("Sign-in failed:", error);
      return { success: false, error: "Sign-in failed" };
    }
  }

  const SignOut = async () => {
    try {
      console.log("Signing out...");
      return { success: true };
    } catch (error) {
      console.error("Sign-out failed:", error);
      return { success: false, error: "Sign-out failed" };
    }
  }

  const SignUp = async (crendentials: ISignUpCredentials) => {
    try {
      console.log("Signing up with data:", crendentials);
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