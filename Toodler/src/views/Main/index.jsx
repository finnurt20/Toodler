import React from 'react';
import {
  View, Image, Text, TouchableHighlight,
} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.title}>Toodler</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigate('Board')}>
      <Text style={styles.buttonText}>Start planning!</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
