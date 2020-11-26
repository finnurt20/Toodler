import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import PropoTypes from 'prop-types';
import data from '../../resources/data.json';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';


class Board extends React.Component {
  state = {
    boards: data.boards,
    selectedBoards: []
  }
  onBoardLongPress(id) {
    const { selectedBoards } =this.state;
    if (selectedBoards.indexOf(id) !== -1){
      //the board is already in the list
      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== id)
      });
    } else {
      //The board needs to be added to the list
      this.setState({
        selectedBoards: [ ...selectedBoards, id]
      });
    }
  }
  render() {
    //console.log(this.state.selectedBoards)
    const { selectedBoards, boards } = this.state;
    return (
    <View style={{flex: 1}}>
      <Toolbar hasSelectedItem={selectedBoards.length > 0}/>
      <BoardList
        onLongPress={(id) => this.onBoardLongPress(id)}
        boards={ boards }
        selectedBoards={ selectedBoards }
      />
    </View>
    )
  };
};



export default Board;
