import { ApiBase } from "../config/axios";
import { Recipe } from "../models/Recipes.interface";

interface RecipeSearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

class RecipeService {
  async getRecipes(query: string, number: number = 10): Promise<Recipe[]> {
    try {
      const response = await ApiBase.get<RecipeSearchResponse>("/recipes/complexSearch", {
        params: {
          query: query,
          number: number,
          addRecipeInformation: true, // To get full recipe details
          instructionsRequired: true, // To ensure instructions are included
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  }

  async getRecipeById(id: number): Promise<Recipe> {
    try {
      const response = await ApiBase.get<Recipe>(`/recipes/${id}/information`, {
        params: {
          includeNutrition: true, // To include nutrition information
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching recipe with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new RecipeService();
