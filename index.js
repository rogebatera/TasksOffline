import {AppRegistry} from 'react-native';
import Task from './src/screens/TaskList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Task);
