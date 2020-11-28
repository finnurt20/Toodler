import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModalTask extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      description: ''
    }
  }

  saveData =()=> {
    const{name, description} = this.state;
    let myArray={
      name: name,
      description: description,
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
        <TextInput
          placeholder="Description"
          style={styles.input}
          onChangeText={description => this.setState({description})}
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


export default AddModalTask;
