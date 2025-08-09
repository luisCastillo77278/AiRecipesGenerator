
export type ThemeTypes = 'light' | 'dark';

export type ColorShades = {
  DEFAULT: string;
  light: string;
  dark: string;
}

export type ThemeVariant = {
  primary: ColorShades;
  secondary: ColorShades;
  accent: ColorShades;
  background: string;
  text: string;
}

export type ColorsTheme = Record<ThemeTypes, ThemeVariant>;
export type ColorTheme = {
  [ K in ThemeTypes ]: ThemeVariant
}[ThemeTypes]