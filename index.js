/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import First from './src/screens/App';
import WelcomeScreen from './src/screens/WelcomeScreen';

import BikeListingScreen from './src/screens/BikeDetailScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => First);
