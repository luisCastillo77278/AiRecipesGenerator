import { ColorsType } from '@constants/Colors';
import { FC, PropsWithChildren, useState } from 'react';
import { ThemeContext } from './ThemeContext';

interface IProps extends PropsWithChildren {}

const ThemeProvider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<ColorsType>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
