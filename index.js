/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {ThemeProvider} from './src/context/ThemeContext';
import {name as appName} from './app.json';

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => ThemedApp);
