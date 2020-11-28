import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import PropoTypes from 'prop-types';
import data from '../../resources/data.json';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModalBoard from '../../components/AddModalBoard';
import { removeBoard, addBoard, getAllBoards } from '../../services/fileService';


class Board extends Component {
  constructor(props){
    super(props)
  }
  state = {
    boards: [],
    selectedBoards: [],
    isAddModalOpen: false,
    deletedLists: [],
  }

  componentDidMount() {
    this.setState({boards: data.boards})
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

//  async addPhoto(boardLocation){
    //const newBoard = await addBoard(boardLocation);
  //  const newBoard = this.state
  //  const { boards } = this.state;
  //  this.setState({
    //  boards: [ ...boards, newBoard],
    //  isAddModalOpen: false,
  //  })
//  };

  async deleteSelectedBoards(){
    const { selectedBoards, boards } = this.state;
    await Promise.all(selectedBoards.map(board => removeBoard(board)));
    console.log(selectedBoards)
    this.setState({
      selectedBoards: [],
      boards: boards.filter(board => selectedBoards.indexOf(board.id) === -1),
    });
  }

  addBoard=(myArray)=>{
    const { boards } = this.state
    //Get the last id in the state and add 1 to it to get a new id
    const newId = boards.slice(-1)[0].id + 1
    let newBoard = {
      id: newId,
      name: myArray.name,
      thumbnailPhoto: myArray.thumbnailPhoto,
    }
    this.setState({
      boards: [ ...boards, newBoard],
      isAddModalOpen: false,
    })
    //Alert the user that he has created a board
    alert('Board ' + myArray.name +' created')
  }

  render() {
    const { selectedBoards, boards, isAddModalOpen, deletedLists} = this.state;
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
        deletedLists={ deletedLists }
      />
      <AddModalBoard
        isOpen={isAddModalOpen}
        closeModal={() => this.setState({ isAddModalOpen: false })}
        onPress={(myArray) => this.addBoard(myArray)}
        //takePhoto={() => this.takePhoto()}
        //selecteFromCameraRoll={() => this.selecteFromCameraRoll()}
      />
    </View>
    )
  };
};



export default Board;
