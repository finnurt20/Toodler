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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderWidth: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
  description: {
    marginRight: 50,
  },
  isFinished: {
    textAlign: 'right',
    fontWeight: 'bold'
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 27,
  }
});
