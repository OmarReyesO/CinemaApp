import React, {createContext, useState} from 'react';
import {Theme} from '../@types/Theme';

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
