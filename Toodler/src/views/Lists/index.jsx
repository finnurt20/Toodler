import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import { getBoardLists } from '../../services/fileService';
import styles from './styles';
import data from '../../resources/data.json';
import Lister from '../../components/Lister';
import Toolbar from '../../components/Toolbar';
import AddModalList from '../../components/AddModalList';
import { removeList } from '../../services/fileService';

class Lists extends React.Component {
  constructor(props){
    super(props)

  }
  state = {
    lists: [],
    selectedLists: [],
    isAddModalOpen: false,
    //deletedLists: []
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({lists: this.getListsForBoard()})
    //this.setState({deletedList: navigation.getParam('deletedLists', '')})
  }

  // Comes from board and is here to make sure that the lists dont show up after being delted and the state is refreshed
  deletedLists(){
    const { navigation } = this.props;
    const deletedLists = navigation.getParam('deletedLists')
    return deletedLists;
  }
  // We make a deletedList to know what lists we have already deleted from the selecteList
  onListLongPress(id) {
    // const deletedLists = this.deletedLists()

    const { selectedLists } =this.state;
    //console.log(deletedLists)
    if (selectedLists.indexOf(id) !== -1){
      //the list is already in the list
      this.setState({
        selectedLists: selectedLists.filter(list => list !== id),
        //deletedLists: deletedLists.filter(list => list !== id)
      });
    } else {
      //The list needs to be added to the list

      this.setState({
        selectedLists: [ ...selectedLists, id],
        //deletedLists: [ ...deletedLists, id]
      });
    }
  }

  //Gets the list for the board that was pressed on
  getListsForBoard() {
    var list = [];
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardid', '');
    for (let i=0; i<data.lists.length; i++){
      if (data.lists[i].boardId == boardId){
        list.push(data.lists[i])
      }
    }
    return list
  }
  listId(){
    const { lists } = this.state
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardid', '');
    if (lists.length>0){
      const newId = lists.slice(-1)[0].id + 7 * 3
      return newId
    } else {
      const newId = boardId * 13 + 3
      return newId
    }
  }

  addList=(myArray)=>{
    const { lists } = this.state
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardid', '')
    //Get the last id from all the lists and add 1 to it to get a new id,
    // Had problems giving lists id because they are not really saved in the database
    //But they still get there unic id
    const newId = this.listId()
    let newList = {
      id: newId,
      name: myArray.name,
      color: myArray.color,
      boardId: boardId
    }
    this.setState({
      lists: [ ...lists, newList],
      isAddModalOpen: false,
    })
    //Alert the user that he has created a board
    alert('List ' + myArray.name +' created')
  }
  // We delete from selected list but
  async deleteSelectedLists(){
    const deletedLists = this.deletedLists();
    const { selectedLists, lists } = this.state;
    await Promise.all(selectedLists.map(list => removeList(list)));
    // fill the deletedLists array
    for (let i=0; i<selectedLists.length; i++){
      deletedLists[deletedLists.length] = selectedLists[i]
    }
    console.log(deletedLists)
    this.setState({
      selectedLists: [],
      lists: lists.filter(list => selectedLists.indexOf(list.id) === -1),
    });
  }
  render() {
    const { selectedLists, lists, isAddModalOpen } = this.state;
    return (
    <View style={{flex: 1} }>
      <Toolbar
        hasSelectedItem={selectedLists.length > 0}
        onAdd={() => this.setState({ isAddModalOpen: true })}
        onRemove={() => this.deleteSelectedLists()}/>
      <Lister
        onLongPress={(id) => this.onListLongPress(id)}
        lists={lists}
        selectedLists={ selectedLists }/>
      <AddModalList
        isOpen={isAddModalOpen}
        closeModal={() => this.setState({ isAddModalOpen: false })}
        onPress={( myArray ) => this.addList(myArray)}/>
    </View>
    )
  };
};

export default Lists;
