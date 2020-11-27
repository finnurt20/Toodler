import { StyleSheet} from 'react-native';
import { toodlerRed, toodlerBlue, toodlerButton } from '../../styles/colors';
export default StyleSheet.create({
  icon: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: toodlerButton,
    padding: 10,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    paddingRight: 150,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,

  }
})
