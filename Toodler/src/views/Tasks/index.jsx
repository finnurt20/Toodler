import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import { getBoardLists } from '../../services/fileService';
import styles from './styles';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';

class Tasks extends React.Component {
  state = {
    isFinished: 0,
    name: '',
    description: '',
    id: -1,
  }
  async componentDidMount() {

  }
  render() {
    var tasks = [];
    const { navigation } = this.props;
    const listId = navigation.getParam('listId', '');
    for (let i=0; i<data.tasks.length; i++){
      if (data.tasks[i].listId == listId){
        tasks.push(data.tasks[i])
      }
    }
    return (
    <View style={{flex: 1} }>
      <Toolbar />
      <TaskList tasks={tasks}/>
    </View>
    )
  };
};

export default Tasks;
