import React, { Component, PropTypes } from 'react';
import {
  Image,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';

class SwiperSelector extends Component {
  render() {
    return (
      <Swiper showsButtons>
        {this.props.uris.map((uri, i) => (
          <View key={`view-${i}`} style={{ alignItems: 'center' }}>
            <Image
              key={`image-${i}`}
              source={{ uri }}
              style={{
                width: 120,
                height: 120,
              }}
            />
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
