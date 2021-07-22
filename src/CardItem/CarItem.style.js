import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
  },
  img: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  price: {fontWeight: 'bold', fontSize: 14, color: 'gray', paddingBottom: 4},
  inStock: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
