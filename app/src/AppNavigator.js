import {createAppContainer} from 'react-navigation';
import HomeScreen from './Screen/HomeScreen.js';
import UserScreen from './Screen/UserScreen.js';
import LoginScreen from './Screen/LoginScreen.js';
import D from './Screen/ColorScreen/D';
import {createStackNavigator} from 'react-navigation-stack';
import {Header} from 'react-native/Libraries/NewAppScreen';
const AppNavigator = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    Header: {screen: Header},
    UserScreen: {screen: UserScreen},
    LoginScreen: {screen: LoginScreen},
    D: {screen: D},
  },
  {
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
