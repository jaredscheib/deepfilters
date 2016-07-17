import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import styles from './app.styles';

class deepfilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textImageCarousel: 'Swipe to choose a photo',
      textStickerCarousel: 'Add a sticker',
      textSaveButton: 'Go!',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImageCarousel}>
          <Text style={styles.textHeader}>{this.state.textImageCarousel.toUpperCase()}</Text>
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
