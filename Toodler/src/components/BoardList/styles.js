import { StyleSheet, StatusBar } from 'react-native';
import { toodlerRed } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: toodlerRed,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
    marginVertical: 8,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderWidth: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  }
});
