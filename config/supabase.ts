import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL_API = process.env.EXPO_PUBLIC_API_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_ANON_TOKEN;

export const supabase = createClient(SUPABASE_URL_API, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});