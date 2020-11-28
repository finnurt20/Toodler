import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import { ColorPicker } from 'react-native-color-picker'
import { SketchPicker } from 'react-color';

class AddModalList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      color: ''
    }
  }
  Picker = () => (
  <ColorPicker
    onColorSelected={color => alert(`Color selected: ${color}`)}
    style={{flex: 1}}
  />
)
  saveData =()=> {
    const{name, color} = this.state;
    let myArray={
      name: name,
      color: color
    }
    Keyboard.dismiss()
    return myArray
  }

  render(){
    const {isOpen, closeModal, onPress} = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={name => this.setState({name})}
        />
        <Button
          style={styles.button}
          title="Pick Color"
          onPress={() => this.Picker()}
        />
        <Button
          style={styles.button}
          title="Save"
          onPress={() => onPress(this.saveData())}
        />

      </Modal>
    );
  }
}


export default AddModalList;
