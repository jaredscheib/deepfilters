import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewLandingPage: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageLanding: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    width: null,
    height: null,
    justifyContent: 'center',
  },
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
    justifyContent: 'center',
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
  imageMain: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    width: null,
    height: null,
  },
  imageSticker: {
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 1,
    left: 20,
    top: 250,
  },
});
