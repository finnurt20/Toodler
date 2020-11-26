import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove, hasSelectedItem}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight
      style={styles.toolbarAction}
       onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create Board</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}
      disabled={!hasSelectedItem}>
      <Text style={[styles.toolbarActionText, hasSelectedItem ? {} : { color: 'gray' }]}>Delete Board</Text>
    </TouchableHighlight>
  </View>
);



export default Toolbar;
