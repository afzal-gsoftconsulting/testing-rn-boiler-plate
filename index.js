/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/Entrypoint';
import {name as appName} from './app.json';
import './app/languages';
AppRegistry.registerComponent(appName, () => App);
