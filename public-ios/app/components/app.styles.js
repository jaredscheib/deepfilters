import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'black',
  },
  viewImageDisplay: {
    flex: 5,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
  },
  viewStickerSwiper: {
    flex: 2,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    position: 'relative',
  },
  viewSaveButton: {
    flex: 1,
    backgroundColor: 'red',
  },
  textHeader: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    padding: 3,
  },
  textButton: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  mainImage: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    width: null,
    height: null,
  },
  secondImage: {
    flex: 1,
    width: null,
    height: null,
    position: 'absolute',
  },
});
