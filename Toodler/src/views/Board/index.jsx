import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import PropoTypes from 'prop-types';
import data from '../../resources/data.json';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';

class Board extends React.Component {
  render() {
    return (
    <View style={{flex: 1}}>
      <Toolbar />
      <BoardList boards={ data.boards}/>
    </View>
    )
  };
};



export default Board;
