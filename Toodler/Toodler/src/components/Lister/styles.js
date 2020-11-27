import { StyleSheet, StatusBar } from 'react-native';
import { toodlerRed } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
    backgroundColor: toodlerRed,
  },
  item: {
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 5,
    borderWidth: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  checkmark: {
    position: 'absolute',
    top: 5,
    right: 15,
    fontSize: 27,
  }
});
