import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from './app.styles';

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
    };

    this._onPressSave = this._onPressSave.bind(this);
  }

  _onPressSave() {
    // react native view snapshot
  }

  render() {
    const textImageDisplay = `${this.state.textImage}${this.state.textGuess}`;
    const uri = this.state.mainImageUri;
    return (
      <View style={styles.container}>
        <View style={styles.viewImageDisplay}>
          <Text style={styles.textImageDisplay}>{textImageDisplay.toUpperCase()}</Text>
          <Image source={{ uri }} style={styles.mainImage} />
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
