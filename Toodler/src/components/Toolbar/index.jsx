import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove, hasSelectedItem}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}>
      <Text style={[styles.toolbarActionText, hasSelectedItem ? {} : { color: 'gray' }]}>Edit</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={!hasSelectedItem}>
      <Text style={[styles.toolbarActionText, hasSelectedItem ? {} : { color: 'gray' }]}>Delete</Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  //onAdd: PropTypes.func.isRequired,
  //onRemove: PropTypes.func.isRequired,
  hasSelectedItem: PropTypes.bool.isRequired,
};



export default Toolbar;
