import { StyleSheet } from 'react-native';
import { toodlerRed, toodlerBlue } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: toodlerBlue,
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  }
});
