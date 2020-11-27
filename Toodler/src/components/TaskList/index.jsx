import React, {useState, Component}from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import toodlerBlue from '../../styles/colors';
import styles from './styles';

const Item = ({ item, onPress, style, onLongPress, isSelected }) => (
  // Checks for isFinished bool, if the box is clicked then change tye bool
  // () => item.isFinished = !item.isFinished
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={() => item.isFinished = !item.isFinished}
    onLongPress={() => onLongPress(item.id)}>
    {
      isSelected
      ?
      <AntDesign name="checkcircle" style={ styles.checkmark} />
      :
      <></>
    }
    <View style={{opacity: isSelected ? 0.3 : 1 }}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.isFinished}>Completed: {item.isFinished.toString()}</Text>
    </View>
  </TouchableOpacity>
);

const TaskList = ({ tasks, onLongPress, selectedTasks, onPress } ) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#5a57ff' : '#6bd1fa';

  return (
    <Item
      item={item}
      onPress={onPress}
      style={{ backgroundColor }}
      onLongPress={onLongPress}
      isSelected={selectedTasks.indexOf(item.id) !== -1}
    />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={[selectedId, selectedTasks]}
      />
    </SafeAreaView>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,
  // onPress: PropTypes.func.isRequired
}

export default withNavigation(TaskList);
