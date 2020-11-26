import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Board from '../views/Board';
import ListTasks from '../views/ListTasks';

const StackNavigator = createStackNavigator({
  Main,
  Board,
  ListTasks
});
export default createAppContainer(StackNavigator);
