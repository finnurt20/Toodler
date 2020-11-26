import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import { getBoardLists } from '../../services/fileService';
import logo from '../../resources/logo.png';
import styles from './styles';
import data from '../../resources/data.json';
import Lister from '../../components/Lister';
import Toolbar from '../../components/Toolbar';

class Lists extends React.Component {
  state = {
    currentList: [],
  }
  async componentDidMount() {

  }

  render() {
    //Make a new list with the lists the have the boarId assoiciated
    //And send it to the Lister component
    var list = [];
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardid', '');
    for (let i=0; i<data.lists.length; i++){
      if (data.lists[i].boardId == boardId){
        list.push(data.lists[i])
      }
    }
    return (
    <View style={{flex: 1} }>
      <Toolbar />
      <Lister lists={list}/>
    </View>
    )
  };
};

export default Lists;
