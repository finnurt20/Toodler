import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

const ImageThumbnail = ({ id, name, thumbnailPhoto}) => (
  <Image
    style={styles.image}
    source={{ uri: thumbnailPhoto }} />
);

ImageThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  // thumbnailPhoto: PropTypes.string.isRequired
}
export default ImageThumbnail;
