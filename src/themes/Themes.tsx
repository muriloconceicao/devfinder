export const lightTheme = {
  dark: false,
  colors: {
    primary: '#0079FF',
    secondary: '#697C9A',
    background: '#F6F8FF',
    text: '#2B3442',
    border: '#cccccc',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: '#000000',
    secondary: '#000000',
    background: '#000000',
    text: '#000000',
    border: '#000000',
  },
};

export type ThemeType = typeof lightTheme;
