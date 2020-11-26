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
    selectedTasks: [],
  }
  onTasksLongPress(id) {
    const { selectedTasks } =this.state;
    if (selectedTasks.indexOf(id) !== -1){
      //the board is already in the list
      this.setState({
        selectedTasks: selectedTasks.filter(task => task !== id)
      });
    } else {
      //The board needs to be added to the list
      this.setState({
        selectedTasks: [ ...selectedTasks, id]
      });
    }
  }

  getTasksForList() {
    var tasks = [];
    const { navigation } = this.props;
    const listId = navigation.getParam('listId', '');
    for (let i=0; i<data.tasks.length; i++){
      if (data.tasks[i].listId == listId){
        tasks.push(data.tasks[i])
      }
    }
    return tasks
  }

  render() {
    const { selectedTasks, tasks } = this.state;
    return (
    <View style={{flex: 1} }>
      <Toolbar hasSelectedItem={selectedTasks.length > 0}/>
      <TaskList
        onLongPress={(id) => this.onTasksLongPress(id)}
        tasks={ this.getTasksForList() }
        selectedTasks={ selectedTasks }
      />
    </View>
    )
  };
};

export default Tasks;
