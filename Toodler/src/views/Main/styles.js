import { StyleSheet } from 'react-native';
import { toodlerRed, toodlerBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: toodlerRed,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: toodlerBlue,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
  },
});
