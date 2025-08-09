import { Colors } from '@constants/Colors';
import { FC, PropsWithChildren, useState } from 'react';
import { ColorTheme, ThemeTypes } from './Theme.interface';
import { ThemeContext } from './ThemeContext';

interface IProps extends PropsWithChildren {}

const ThemeProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>('light');
  const [paletteColors, setPaletteColors] = useState<ColorTheme>(Colors.light);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        paletteColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
