import React from 'react';
import PropoTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, TextInput, TouchableHighlight, Button, AsyncStorage, Keyboard } from 'react-native';
import Modal from '../Modal';
import styles from './styles';




// <Text>Name <UselessTextInput /></Text>
// <UselessTextInput />
// <Text>Description <UselessTextInput /></Text>
// <UselessTextInput />
class AddModal extends React.Component {
  state={
    name: '',
    description: '',
    thumbnail: ''
  }
  saveData =()=>{
    const{name, description,thumbnail} = this.state;

    let myArray={
      name: name,
      description: description,
      thumbnail: thumbnail,
    }
    Keyboard.dismiss()
    AsyncStorage.setItem('myArray', JSON.stringify(myArray))
    alert('Board ' + name +' created')
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
        <TextInput
          placeholder="Thumbnail"
          style={styles.input}
          onChangeText={thumbnail => this.setState({thumbnail})}
        />

        <Button
          style={styles.button}
          title="Save"
          onPress={this.saveData}
        />
      </Modal>
    );
  }
}


export default AddModal;
