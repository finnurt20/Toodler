import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';



const Item = ({ item, onPress, style, navigation}) => (
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={() => navigation.navigate('ListTasks')}>
    <Text style={styles.title}>{item.name}</Text>
    <ImageThumbnail
        id={item.id}
        name={item.name}
        thumbnailPhoto={item.thumbnailPhoto}/>
  </TouchableOpacity>
);

const BoardList = ({ boards }) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#5a57ff" : "#a7a6ff";

  return (
    <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      style={{ backgroundColor }}
    />
    );
  }
  return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={boards}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  </SafeAreaView>
);
};

export default BoardList;
