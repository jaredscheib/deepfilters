import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  viewImageCarousel: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
  viewStickerCarousel: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  viewSaveButton: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  textHeader: {
    fontSize: 26,
    textAlign: 'center',
  },
  textButton: {
    fontSize: 22,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('deepfilters', () => deepfilters);
