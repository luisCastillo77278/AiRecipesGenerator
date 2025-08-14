import { supabase } from "../config/supabase";

class SupabaseService {
  constructor(){}

  async  getUserId() {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw new Error('Usuario no autenticado');
    return data.user.id;
  }

  async addFavorite(recipeid: number, userId: number){
    try{
      const { data, error } = await supabase
        .from('favorites')
        .insert({
          recipe_id: recipeid,
          user_id: userId,
          created_at: new Date(),
        })

      if(error) throw error;

      return data;
    }catch(error){
      console.log(error);
      throw error;
    }
  }

  async removeFavorite(recipeid: number, userId: number){
    try{
      const { data, error } = await supabase
        .from('favorites')
        .delete()
        .eq('recipe_id', recipeid)
        .eq('user_id', userId)

      if(error) throw error   

      return data;
    }catch(error){
      console.log(error);
      throw error;
    }
  }

  async getFavorites(userId: number){
    try{
      const { data, error } = await supabase
        .from('favorites')
        .select('recipe_id')
        .eq('user_id', userId)

      if(error) throw error;

      return data ? data.map((fav) => fav.recipe_id) : [];
    }catch(error){
      console.log(error);
      throw error;
    }
  }

  async getFavorite(recipeid: number, userId: number){
    try{
      const { data, error } = await supabase
        .from('favorites')
        .select('recipe_id')
        .eq('recipe_id', recipeid)
        .eq('user_id', userId)

      if(error) throw error;

      return data;
    }catch(error){
      console.log(error)
      throw error;
    }
  }

  async toggleRecipeFavorite(recipeId: number, userId: number){
    try{
      const favorite = await this.getFavorite(recipeId, userId);
      if(favorite){
        await this.removeFavorite(recipeId, userId);
      }else{
        await this.addFavorite(recipeId, userId);
      }
    }catch(error){
      console.log(error);
      throw error;
    }
  }
}

export default new SupabaseService();