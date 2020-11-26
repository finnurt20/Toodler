import React, {useState, Component}from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

const Item = ({ item, onPress, style}) => (
  // Checks for isFinished bool, if the box is clicked then change tye bool
  // () => item.isFinished = !item.isFinished
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={() => item.isFinished = !item.isFinished}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.isFinished}>Completed: {item.isFinished.toString()}</Text>
  </TouchableOpacity>
);

const TaskList = ({ tasks } ) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" : item.color;

  return (
    <Item
      item={item}
      onPress={() => setSelectedId = item.id}
      style={{ backgroundColor }}
    />
    );
  }
  return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      extraData={selectedId}
    />
  </SafeAreaView>
);
};

export default withNavigation(TaskList);
