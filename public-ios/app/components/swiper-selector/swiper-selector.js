import React, { Component, PropTypes } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';

class SwiperSelector extends Component {
  render() {
    return (
      <Swiper showsButtons>
        {this.props.uris.map((uri, i) => (
          <View key={`view-${i}`}>
            <Text key={`text-${i}`}>{uri}</Text>
            <Image key={`image-${i}`} source={{ uri }} style={{ width: 150, height: 150 }} />
          </View>
        ))}
      </Swiper>
    );
  }
}

SwiperSelector.propTypes = {
  uris: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SwiperSelector;
