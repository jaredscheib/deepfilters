import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'black',
  },
  viewImagesComposerDisplay: {
    flex: 5,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    // position: 'relative',
  },
  viewMainImageDisplay: {
    flex: 1,
    zIndex: 0,
    // position: 'relative',
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
  textImageDisplay: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    padding: 3,
  },
  textStickerSwiper: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    padding: 3,
  },
  textButton: {
    fontSize: 31,
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
  stickerImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    zIndex: 1,
    left: 40,
    top: 200,
  },
});
