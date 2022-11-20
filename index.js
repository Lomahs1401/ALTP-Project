/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigator from './routes/homeStack';

AppRegistry.registerComponent(appName, () => App);
