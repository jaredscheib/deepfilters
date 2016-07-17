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
          <Text>Choose your photo</Text>
        </View>
        <View style={styles.viewStickerCarousel}>
          <Text>Sticker time!</Text>
        </View>
        <View style={styles.viewSaveButton}>
          <Text>temp button text</Text>
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
});

AppRegistry.registerComponent('deepfilters', () => deepfilters);
