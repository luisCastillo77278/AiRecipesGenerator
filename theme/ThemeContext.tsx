import { createContext } from 'react';
import { ColorsType } from '../constants/Colors';

interface IThemeContext {
  theme: ColorsType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {
    throw new Error('Toggle theme not implemented');
  },
});
