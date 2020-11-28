import React, { Component } from 'react';
import PropoTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { addImage } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/photoService';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard, View } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModalBoard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      thumbnail: ''
    }
  }

  async takePhoto(){
    const { thumbnail } = this.state
    const photo = await takePhoto();
    //if (photo.length > 0) {await addImage(photo); }
    //ALWAYS GET UNHANDLED ERROR
    //const newimage = await addImage(photo)
    this.setState({thumbnail: photo})
  }
  async selectFromCameraRoll(){
    const { thumbnail } = this.state
    const photo = await selectFromCameraRoll();
    //ALWAYS GET UNHANDLED ERROR
    //const newimage = await addImage(photo)
    this.setState({thumbnail: photo})
  }

  saveData =()=> {
    const{name, thumbnail} = this.state;
    let myArray={
      name: name,
      thumbnail: thumbnail,
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
        <Text style={styles.thumbnailText}>Pick a thumbnail for board:</Text>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={ () => this.takePhoto() }>
            <Entypo style={ styles.icon } name="camera" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.selectFromCameraRoll() }>
            <Entypo style={ styles.icon } name="image" />
          </TouchableOpacity>
        </View>

        <Button
          style={styles.button}
          title="Save"
          onPress={() => onPress(this.saveData())}
        />
      </Modal>
    );
  }
}


export default AddModalBoard;
