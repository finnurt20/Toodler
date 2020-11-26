import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const ListTasks = () => (
  <View style={styles.container}>
    <Text style={styles.title}>You are now viewing tasks in a board</Text>
  </View>
);

export default ListTasks;
