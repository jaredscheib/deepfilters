import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './app.styles';

import ViewSnapshotter from 'react-native-view-snapshot';
import RNFS from 'react-native-fs';
import SwiperSelector from './swiper-selector/swiper-selector';

class deepfilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textImage: 'You found a ',
      textGuess: 'dog',
      textStickers: 'Swipe to add a sticker',
      textSave: 'Save',
      mainImageUri: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi1.jpg',
      stickerImageUris: [
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi1.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi2.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi3.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi4.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi5.jpg',
      ],
      savedImage: false,
      savedImagePath: '',
    };

    this._onPressSave = this._onPressSave.bind(this);
  }

  _onPressSave() {
    const ref = React.findNodeHandle(this.refs.image);
    const imagePath = this._imagePath();
    // TODO overlay sticker before save snapshot
    ViewSnapshotter.saveSnapshotToPath(ref, imagePath, (error, successfulWrite) => {
      if (successfulWrite) {
        this.setState({
          savedImagePath: imagePath,
          textImage: 'You saved this magic',
          textSave: 'Saved!',
        });
      } else {
        console.log(error);
      }
    });
  }

  _imagePath() {
    const x = new Date();
    let month = x.getMonth();
    month = month.length === 1 ? `0${month}` : month;
    let date = x.getDate();
    date = date.length === 1 ? `0${date}` : date;
    const fullDate = `${x.getFullYear()}${month}${x}`;
    const fullTime = `${x.toTimeString().substr(0, 8).replace(/:/gi, '')}`;
    const uid = `${fullDate}${fullTime}`;
    return `${RNFS.CachesDirectoryPath}/${uid}.png`;
  }

  render() {
    const textImageDisplay = `${this.state.textImage}${this.state.textGuess}`;
    const uri = !this.savedImage ? this.state.mainImageUri : this.state.savedImagePath;
    return (
      <View style={styles.container}>
        <View style={styles.viewImageDisplay}>
          <Text style={styles.textImageDisplay}>{textImageDisplay.toUpperCase()}</Text>
          <View ref="image">
            <Image source={{ uri }} style={styles.mainImage} />
          </View>
        </View>
        <View style={styles.viewStickerSwiper}>
          <Text style={styles.textStickerSwiper}>{this.state.textStickers.toUpperCase()}</Text>
          <SwiperSelector uris={this.state.stickerImageUris} />
        </View>
        <TouchableHighlight
          style={styles.viewSaveButton}
          activeOpacity={80}
          underlayColor="steelblue"
          onPress={this._onPressSave}
        >
          <Text style={styles.textButton}>{this.state.textSave.toUpperCase()}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('deepfilters', () => deepfilters);
