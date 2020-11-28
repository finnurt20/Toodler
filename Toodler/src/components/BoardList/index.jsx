import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';




const Item = ({ item, onPress, style, onLongPress, isSelected}) => (
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={onPress}
    onLongPress={() => onLongPress(item.id)}>
    {
      isSelected
      ?
        <AntDesign name="checkcircle" style={styles.checkmark} />
      :
      <></>
    }
    <View style={{opacity: isSelected ? 0.3 : 1 }}>
      <Text style={styles.title}>{item.name}</Text>
      <ImageThumbnail
        id={item.id}
        name={item.name}
        thumbnailPhoto={item.thumbnailPhoto}/>
    </View>
  </TouchableOpacity>
);

const BoardList = ({ boards, navigation: { navigate }, onLongPress, selectedBoards, deletedLists }) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#5a57ff" : "#a7a6ff";

  return (
    <Item
      item={item}
      onPress={() => navigate('Lists', { boardid: item.id, deletedLists: deletedLists })}
      style={{ backgroundColor }}
      onLongPress={onLongPress}
      isSelected={selectedBoards.indexOf(item.id) !== -1}
    />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={boards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={[selectedId, selectedBoards]}
      />
    </SafeAreaView>
);
};

export default withNavigation(BoardList);
