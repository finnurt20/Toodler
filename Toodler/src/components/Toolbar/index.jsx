import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create Board</Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Toolbar;
