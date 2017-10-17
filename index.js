import { AppRegistry } from 'react-native';
import App from './src/App';
import {StackNavigator} from 'react-navigation';
import Details from './src/Details';

export const stackNavigator = StackNavigator({
  Home: { screen: App },
  Details: {
    path: '/:article',
    screen: Details
  },
});

AppRegistry.registerComponent('OverWatchApp', () => stackNavigator);
