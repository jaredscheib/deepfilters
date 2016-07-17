/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class deepfilters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImageCarousel}>
          <Text style={styles.textHeader}>{'Swipe to choose a photo'.toUpperCase()}</Text>
        </View>
        <View style={styles.viewStickerCarousel}>
          <Text style={styles.textHeader}>{'Add a sticker'.toUpperCase()}</Text>
        </View>
        <View style={styles.viewSaveButton}>
          <Text style={styles.textButton}>{'Go!'.toUpperCase()}</Text>
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
