import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
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
  },
  checkmark: {
    position: 'absolute',
    top: 5,
    right: 15,
    fontSize: 27,
  }
});
