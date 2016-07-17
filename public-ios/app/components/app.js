import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
} from 'react-native';
import styles from './app.styles';

import SwiperSelector from './swiper-selector/swiper-selector';

class deepfilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: {
        image: 'You found a ',
        guess: 'dog',
        stickers: 'Swipe to add a sticker',
        save: 'Save!',
      },
      mainImageUri: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi1.jpg',
      stickerImageUris: [
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi1.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi2.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi3.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi4.jpg',
        'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi5.jpg',
      ],
    };
  }

  render() {
    const { text } = this.state;
    const uri = this.state.mainImageUri;
    return (
      <View style={styles.container}>
        <View style={styles.viewImageDisplay}>
          <Text style={styles.textHeader}>{`${text.image}${text.guess}`.toUpperCase()}</Text>
          <Image source={{ uri }} style={styles.mainImage} />
        </View>
        <View style={styles.viewStickerSwiper}>
          <Text style={styles.textHeader}>{text.stickers.toUpperCase()}</Text>
          <SwiperSelector uris={this.state.stickerImageUris} />
        </View>
        <View style={styles.viewSaveButton}>
          <Text style={styles.textButton}>{text.save.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('deepfilters', () => deepfilters);
