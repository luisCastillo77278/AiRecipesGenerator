import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { IUser } from '../models/Users.interface';
import { ISignInCredentials, ISignUpCredentials } from './Auth.interface';
import { AuthContext } from './AuthContext';
import AuthService from './AuthService';

interface IProps extends PropsWithChildren {}

const AuthProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const SignInWithEmailAndPassword = async (
    crendentials: ISignInCredentials,
  ) => {
    try {
      const response = await AuthService.signInWithEmailAndPassword(
        crendentials.email,
        crendentials.password,
      );
      setUser(response.user);
      setIsAuthenticated(true);
      setToken(response.session.access_token);

      return { success: true, user: response.user };
    } catch (error) {
      console.error('Sign-in failed:', error);
      return { success: false, error: 'Sign-in failed' };
    }
  };

  const SignOut = async () => {
    try {
      const response = await AuthService.signOut();
      setIsAuthenticated(false);
      setUser(null);
      setToken(null);
      return { success: response };
    } catch (error) {
      console.error('Sign-out failed:', error);
      return { success: false, error: 'Sign-out failed' };
    }
  };

  const SignUpWithEmailAndPassword = async (
    crendentials: ISignUpCredentials,
  ) => {
    try {
      const response = await AuthService.signUpWithEmailAndPassword(
        crendentials.email,
        crendentials.password,
      );
      setUser(response.user);
      setIsAuthenticated(true);
      setToken(response.session?.access_token ?? null);
      return { success: true, user: crendentials };
    } catch (error) {
      console.error('Sign-up failed:', error);
      return { success: false, error: 'Sign-up failed' };
    }
  };

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        if (session) {
          setIsAuthenticated(true);
          setUser(session.user);
          setToken(session.access_token);
        }
      })
      .catch((error) => {
        console.error('Error fetching session:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && session) {
          setIsAuthenticated(true);
          setUser(session.user);
          setToken(session.access_token);
        } else if (event === 'SIGNED_OUT') {
          setIsAuthenticated(false);
          setUser(null);
          setToken(null);
        }
      },
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        SignInWithEmailAndPassword,
        SignOut,
        SignUpWithEmailAndPassword,
        user,
        isAuthenticated,
        token,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
