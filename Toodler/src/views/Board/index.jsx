import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import PropoTypes from 'prop-types';
import data from '../../resources/data.json';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import { takePhoto } from '../../services/boardService';
import { remove, addBoard, getAllBoards } from '../../services/fileService';


class Board extends React.Component {
  state = {
    boards: data.boards,
    selectedBoards: [],
    isAddModalOpen: false,
  }
  //async componentDidMount() {
  //  await this._fetchItems();
  //}
  //async _fetchItems(){
  //  const boards = await getAllBoards();
  //  this.setState({ boards })
  //}
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


  async takePhoto(){
    const photo = await takePhoto();
    if (photo.length > 0) {await this.addBoard(photo); }
  }
  selecteFromCameraRoll(){

  }
  async addBoard(boardLocation){
    const newBoard = await addBoard(boardLocation);
    const { boards } = this.state;
    this.setState({
      boards: [ ...boards, newBoard],
      isAddModalOpen: false,
    })
  };
  async deleteSelectedBoards(){
    const { selectedBoards, boards } = this.state;
    // this.setState({ loadingImages: true });
    await Promise.all(selectedBoards.map(board => remove(board)));
    this.setState({
      selectedBoards: [],
      boards: boards.filter(board => selectedBoards.indexOf(board.name) === -1),

    });
  }
  saveData=()=>{
    alert('SAVE')
  }
  render() {
    //console.log(this.state.selectedBoards)
    const { selectedBoards, boards, isAddModalOpen} = this.state;
    return (
    <View style={{flex: 1}}>
      <Toolbar
        onAdd={() => this.setState({ isAddModalOpen: true })}
        onRemove={() => this.deleteSelectedBoards()}
        hasSelectedItem={selectedBoards.length > 0}
      />
      <BoardList
        onLongPress={(id) => this.onBoardLongPress(id)}
        boards={ boards }
        selectedBoards={ selectedBoards }
      />
      <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => this.setState({ isAddModalOpen: false })}
        onPress={this.saveData}
        // takePhoto={() => this.takePhoto()}
        // selecteFromCameraRoll={() => this.selecteFromCameraRoll()}
      />
    </View>
    )
  };
};



export default Board;
