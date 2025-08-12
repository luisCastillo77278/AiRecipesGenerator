import axios from "axios"

export const ApiBase = axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    'x-api-key': process.env.EXPO_PUBLIC_API_KEY_SPOONACULAR
  }
})