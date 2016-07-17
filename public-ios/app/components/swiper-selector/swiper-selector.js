import React, { Component, PropTypes } from 'react';
import {
  Image,
  TouchableHighlight,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';

class SwiperSelector extends Component {
  render() {
    return (
      <Swiper showsButtons>
        {this.props.stickers.map((sticker, i) => (
          <TouchableHighlight
            key={`view-${i}`}
            style={{ alignItems: 'center', }}
            onPress={() => this.props.onStickImage(i)}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Image
                key={`sticker-orig-${i}`}
                source={{ uri: sticker.orig }}
                style={{
                  width: 120,
                  height: 120,
                }}
              />
              <Image
                key={`sticker-styled-${i}`}
                source={{ uri: sticker.styled }}
                style={{
                  width: 120,
                  height: 120,
                }}
              />
            </View>
          </TouchableHighlight>
        ))}
      </Swiper>
    );
  }
}

SwiperSelector.propTypes = {
  onStickImage: PropTypes.func.isRequired,
  stickers: PropTypes.arrayOf(PropTypes.shape({
    orig: PropTypes.string.isRequired,
    styled: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default SwiperSelector;
