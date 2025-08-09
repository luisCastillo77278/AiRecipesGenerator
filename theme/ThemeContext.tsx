import { Colors } from '@constants/Colors';
import { createContext } from 'react';
import { ColorTheme, ThemeTypes } from './Theme.interface';

interface IThemeContext {
  theme: ThemeTypes;
  toggleTheme: () => void;
  paletteColors: ColorTheme;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  paletteColors: Colors.light,
  toggleTheme: () => {
    throw new Error('Toggle theme not implemented');
  },
});
