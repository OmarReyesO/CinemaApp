import React, {ReactNode, useContext} from 'react';
import {ThemeContext} from './context/ThemeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CartProvider} from './context/CartContext';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {LightTheme, DarkTheme} from './themes';
import Router from './views/index.routes';

interface AppProps {
  children: ReactNode;
}

function App({children}: AppProps): JSX.Element {
  const {theme} = useContext(ThemeContext);
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <CartProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
              <Router theme={DarkTheme} />
            </NavigationContainer>
            {children}
          </GestureHandlerRootView>
        </CartProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
