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
        {[1, 2, 3, 4, 5].map((x, i) => {
          const host = 'https://s3-us-west-1.amazonaws.com/filtersimg/places';
          const option = this.props.geolocation;
          const uri = `${host}/${option}/${option}${i + 1}.jpg`;
          console.log(uri);
          return (
            <View key={`view-${i}`}>
              <Text key={`text-${i}`}>{uri}</Text>
              <Image key={`image-${i}`} source={{ uri }} style={{ width: 150, height: 150 }} />
            </View>
          );
        })}
      </Swiper>
    );
  }
}

SwiperSelector.propTypes = {
  geolocation: PropTypes.string.isRequired,
};

export default SwiperSelector;
