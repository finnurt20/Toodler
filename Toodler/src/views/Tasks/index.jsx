import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import { getBoardLists } from '../../services/fileService';
import styles from './styles';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import AddModalTask from '../../components/AddModalTask';
import { removeTask } from '../../services/fileService'

class Tasks extends React.Component {
  state = {
    tasks: [],
    selectedTasks: [],
    isAddModalOpen: false,
    //deletedTasks: [],
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({tasks: this.getTasksForList()})
    //this.setState({deletedList: navigation.getParam('deletedLists', '')})
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
  //Does not update instantly
  onPress(id){
    for (let i = 0; i<data.tasks.length; i++){
      if (data.tasks[i].id == id) {
        data.tasks[i].isFinished = !data.tasks[i].isFinished
      }
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
  addTask=(myArray)=>{
    const { tasks } = this.state
    const { navigation } = this.props;
    const listId = navigation.getParam('listId', '');
    //Get the last id from all the lists and add 1 to it to get a new id,
    // Had problems giving lists id because they are not really saved in the database
    //But they still get there unic id
    const newId = tasks.slice(-1)[0].id + 4 * 3
    let newTask = {
      id: newId,
      name: myArray.name,
      description: myArray.description,
      isFinished: false,
      listId: listId,
    }
    this.setState({
      tasks: [ ...tasks, newTask],
      isAddModalOpen: false,
    })
    //Alert the user that he has created a board
    alert('Task ' + myArray.name +' created')
  }
  async deleteSelectedTasks(){
    const { selectedTasks, tasks } = this.state;
    await Promise.all(selectedTasks.map(task => removeTask(task)));
    console.log(selectedTasks)
    this.setState({
      selectedTasks: [],
      tasks: tasks.filter(task => selectedTasks.indexOf(task.id) === -1),
    });
  }
  render() {
    const { selectedTasks, tasks, isAddModalOpen } = this.state;
    return (
    <View style={{flex: 1} }>
      <Toolbar
        hasSelectedItem={selectedTasks.length > 0}
        onAdd={() => this.setState({ isAddModalOpen: true })}
        onRemove={() => this.deleteSelectedTasks()}/>
      <TaskList
        onLongPress={(id) => this.onTasksLongPress(id)}
        tasks={ tasks }
        selectedTasks={ selectedTasks }
        onPress={(id) => this.onPress(id)}
      />
      <AddModalTask
        isOpen={isAddModalOpen}
        closeModal={() => this.setState({ isAddModalOpen: false })}
        onPress={( myArray ) => this.addTask(myArray)}/>
    </View>
    )
  };
};

export default Tasks;
