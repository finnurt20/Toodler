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

class Tasks extends React.Component {
  render() {
    return (
    <View style={{flex: 1} }>
      <Toolbar />
    </View>
    )
  };
};

export default Tasks;
