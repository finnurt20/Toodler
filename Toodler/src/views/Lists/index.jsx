import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import { getBoardLists } from '../../services/fileService';
import styles from './styles';
import data from '../../resources/data.json';
import Lister from '../../components/Lister';
import Toolbar from '../../components/Toolbar';

class Lists extends React.Component {
  state = {
    lists: data.lists,
    selectedLists: [],
  }

  onListLongPress(id) {
    const { selectedLists } =this.state;
    if (selectedLists.indexOf(id) !== -1){
      //the list is already in the list
      this.setState({
        selectedLists: selectedLists.filter(list => list !== id)
      });
    } else {
      //The list needs to be added to the list
      this.setState({
        selectedLists: [ ...selectedLists, id]
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

  render() {
    const { selectedLists, lists } = this.state;
    return (
    <View style={{flex: 1} }>
      <Toolbar hasSelectedItem={selectedLists.length > 0}/>
      <Lister
        onLongPress={(id) => this.onListLongPress(id)}
        lists={this.getListsForBoard()}
        selectedLists={ selectedLists }/>
    </View>
    )
  };
};

export default Lists;
