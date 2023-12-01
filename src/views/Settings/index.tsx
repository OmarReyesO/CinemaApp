import React, {useState, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {
  Container,
  ThemeBox,
  ThemeIcon,
  ThemeSelector,
  ThemeText,
} from './styles';
import {Theme} from '../../@types/Theme';

const Settings = () => {
  const {theme, toggleTheme} = useContext(ThemeContext) as Theme;

  return (
    <Container>
      <ThemeSelector>
        <ThemeBox active={theme === 'dark'} onPress={() => toggleTheme()}>
          <ThemeIcon active={theme === 'dark'} name="weather-night" />
          <ThemeText active={theme === 'dark'}>Dark</ThemeText>
        </ThemeBox>
        <ThemeBox active={theme === 'light'} onPress={() => toggleTheme()}>
          <ThemeIcon active={theme === 'light'} name="weather-sunny" />
          <ThemeText active={theme === 'light'}>Light</ThemeText>
        </ThemeBox>
      </ThemeSelector>
    </Container>
  );
};

export default Settings;
