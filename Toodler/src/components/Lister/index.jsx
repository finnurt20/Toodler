import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';


const Item = ({ item, onPress, style}) => (
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={onPress}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const Lister = ({ lists, navigation: { navigate }}) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" : item.color;

  return (
    <Item
      item={item}
      onPress={() => navigate('Tasks', { listId: item.id })}
      style={{ backgroundColor }}
    />
    );
  }
  return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={lists}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      extraData={selectedId}
    />
  </SafeAreaView>
);
};

export default withNavigation(Lister);
