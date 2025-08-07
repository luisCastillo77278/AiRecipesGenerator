import { supabase } from "../config/supabase";

class AuthService {
  async signInWithEmailAndPassword(email: string, password: string){
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if(error) throw new Error(error.message);

      return data;
    }catch(err){
      throw err;
    }
  }

  async signUpWithEmailAndPassword(email: string, password: string){
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if(error) throw new Error(error.message);

      return data;
    }catch(err){
      throw err;
    }
  }

  async signOut(): Promise<boolean> {
    try {
      const { error } = await supabase.auth.signOut();
      if(error) throw new Error(error.message);
      return true;
    }catch(err){
      throw err;
    }
  }
}

export default new AuthService();