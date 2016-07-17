import React, { Component, PropTypes } from 'react';
import {
  Image,
  TouchableHighlight,
} from 'react-native';

import Swiper from 'react-native-swiper';

class SwiperSelector extends Component {
  render() {
    return (
      <Swiper showsButtons>
        {this.props.uris.map((uri, i) => (
          <TouchableHighlight
            key={`view-${i}`}
            style={{ alignItems: 'center', }}
            onPress={() => this.props.onStickImage(i)}
          >
            <Image
              key={`image-${i}`}
              source={{ uri }}
              style={{
                width: 120,
                height: 120,
              }}
            />
          </TouchableHighlight>
        ))}
      </Swiper>
    );
  }
}

SwiperSelector.propTypes = {
  onStickImage: PropTypes.func.isRequired,
  uris: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SwiperSelector;
