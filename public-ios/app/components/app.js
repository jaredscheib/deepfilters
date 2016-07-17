import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './app.styles';

// import ViewSnapshotter from 'react-native-view-snapshot';
// import RNFS from 'react-native-fs';
import SwiperSelector from './swiper-selector/swiper-selector';

class deepfilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textImage: 'You found a ',
      textGuess: 'dog',
      textStickers: 'Swipe to add a sticker',
      textSave: 'Save',
      mainImage: 'https://s3-us-west-1.amazonaws.com/filtersimg/deepout/batman.jpg',
      stickers: [
        {
          orig: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi1.jpg',
          styled: 'https://s3-us-west-1.amazonaws.com/filtersimg/deepout/style1/corgi1.png'
        },
        {
          orig: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi2.jpg',
          styled: 'https://s3-us-west-1.amazonaws.com/filtersimg/deepout/style2/corgi2.png',
        },
        {
          orig: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi3.jpg',
          styled: 'https://s3-us-west-1.amazonaws.com/filtersimg/deepout/style3/corgi3.png',
        },
        {
          orig: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi4.jpg',
          styled: 'https://s3-us-west-1.amazonaws.com/filtersimg/deepout/style4/corgi4.png',
        },
        {
          orig: 'https://s3-us-west-1.amazonaws.com/filtersimg/places/corgi/corgi5.jpg',
          styled: 'https://s3-us-west-1.amazonaws.com/filtersimg/deepout/style5/corgi5.png',
        },
      ],
      iSticker: 0,
      stuckImage: false,
      savedImage: false,
      savedImagePath: '',
    };

    this._onPressSave = this._onPressSave.bind(this);
    this._onStickImage = this._onStickImage.bind(this);
  }

  _onStickImage(i) {
    this.setState({
      iSticker: i,
      stuckImage: true,
    });
  }

  _onPressSave() {
    // const ref = React.findNodeHandle(this.refs.image);
    // const imagePath = this._imagePath();
    // TODO overlay sticker before save snapshot
    // ViewSnapshotter.saveSnapshotToPath(ref, imagePath, (error, successfulWrite) => {
      // if (successfulWrite) {
        this.setState({
          savedImagePath: this.state,
          savedImage: true,
          textImage: 'You saved a ',
          textSave: 'Saved!',
        });
      // } else {
        // console.log(error);
      // }
    // });
  }

  // _imagePath() {
  //   const x = new Date();
  //   let month = x.getMonth();
  //   month = month.length === 1 ? `0${month}` : month;
  //   let date = x.getDate();
  //   date = date.length === 1 ? `0${date}` : date;
  //   const fullDate = `${x.getFullYear()}${month}${x}`;
  //   const fullTime = `${x.toTimeString().substr(0, 8).replace(/:/gi, '')}`;
  //   const uid = `${fullDate}${fullTime}`;
  //   return `${RNFS.CachesDirectoryPath}/${uid}.png`;
  // }

  render() {
    const textImageDisplay = `${this.state.textImage}${this.state.textGuess}`;
    const uri = this.state.mainImage;
    console.log('uri!', uri);
    const currentSticker = this.state.stickers[this.state.iSticker].styled;
    // const uri = !this.state.savedImage ? this.state.mainImage : this.state.savedImagePath;
    return (
      <View style={styles.container}>
        <View style={styles.viewImagesComposerDisplay}>
          <Text style={styles.textImageDisplay}>{textImageDisplay.toUpperCase()}</Text>
          <View ref="image" style={styles.viewMainImageDisplay}>
            {this.state.stuckImage ?
              <Image source={{ uri: currentSticker }} style={styles.stickerImage} />
            : undefined}
            <Image source={{ uri }} style={styles.mainImage} />
          </View>
        </View>
        <View style={styles.viewStickerSwiper}>
          <Text style={styles.textStickerSwiper}>{this.state.textStickers.toUpperCase()}</Text>
          <SwiperSelector stickers={this.state.stickers} onStickImage={this._onStickImage} />
        </View>
        <TouchableHighlight
          style={styles.viewSaveButton}
          activeOpacity={80}
          underlayColor="steelblue"
          onPress={this._onPressSave}
        >
          <Text style={styles.textButton}>{this.state.textSave.toUpperCase()}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('deepfilters', () => deepfilters);
