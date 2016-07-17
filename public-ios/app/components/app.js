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
      textImageCarousel: 'Swipe to choose a photo',
      textStickerCarousel: 'Add a sticker',
      textSaveButton: 'Go!',
      geolocations: [
        'insitu',
        'boba',
        'tony',
        'sandbox',
      ],
      iCurrentGeolocation: 1,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImageCarousel}>
          <Text style={styles.textHeader}>{this.state.textImageCarousel.toUpperCase()}</Text>
          <SwiperSelector geolocation={this.state.geolocations[this.state.iCurrentGeolocation]} />
        </View>
        <View style={styles.viewStickerCarousel}>
          <Text style={styles.textHeader}>{this.state.textStickerCarousel.toUpperCase()}</Text>
        </View>
        <View style={styles.viewSaveButton}>
          <Text style={styles.textButton}>{this.state.textSaveButton.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('deepfilters', () => deepfilters);
