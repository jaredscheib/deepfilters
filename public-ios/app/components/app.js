import React, { Component } from 'react';
import {
  AppRegistry,
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
        stickers: 'Add a sticker',
        save: 'Save!',
      },
      urlsStickers: [
        'corgi_url0',
        'corgi_url1',
        'corgi_url2',
        'corgi_url3',
        'corgi_url4',
      ],
    };
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewImageDisplay}>
          <Text style={styles.textHeader}>{`${text.image}${text.guess}`.toUpperCase()}</Text>
        </View>
        <View style={styles.viewStickerSwiper}>
          <Text style={styles.textHeader}>{text.stickers.toUpperCase()}</Text>
          <SwiperSelector uris={this.state.urlsStickers} />
        </View>
        <View style={styles.viewSaveButton}>
          <Text style={styles.textButton}>{text.save.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('deepfilters', () => deepfilters);
