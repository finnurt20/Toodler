import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';


const Item = ({ item, onPress, style, onLongPress, isSelected}) => (
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={onPress}
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
    </View>
  </TouchableOpacity>
);

const Lister = ({ lists, navigation: { navigate }, onLongPress, selectedLists}) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" : item.color;

  return (
    <Item
      item={item}
      onPress={() => navigate('Tasks', { listId: item.id })}
      style={{ backgroundColor }}
      onLongPress={onLongPress}
      isSelected={selectedLists.indexOf(item.id) !== -1}
    />
    );
  }
  return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={lists}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      extraData={[selectedId, selectedLists]}
    />
  </SafeAreaView>
);
};

export default withNavigation(Lister);
