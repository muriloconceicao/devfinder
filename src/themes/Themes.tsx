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
    primary: '#bb86fc',
    secondary: '#03dac4',
    background: '#121212',
    text: '#ffffff',
    border: '#333333',
  },
};

export type ThemeType = typeof lightTheme;
