import { AppRegistry } from 'react-native';
import App from './App';
import {StackNavigator} from 'react-navigation';
import Details from './Details';

export const stackNavigator = StackNavigator({
  Home: { screen: App },
  Details: { screen: Details },
});

AppRegistry.registerComponent('OverWatchApp', () => stackNavigator);
