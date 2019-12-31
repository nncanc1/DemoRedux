/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import HomeScreen from './app/src/Screen/HomeScreen.js';
import {name as appName} from './app.json';
import AppNavigator from './app/src/AppNavigator.js';
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => AppNavigator);
