import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import {sliderImages} from '../images';
import {ScrollView} from 'react-native-gesture-handler';

const images = sliderImages;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const BannerSlider = () => {
  const [imgActive, setImageActive] = useState(0);

  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imgActive) {
        setImageActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((item, index) => (
            <Image
              key={item}
              resizeMode="cover"
              style={styles.wrap}
              source={{uri: item}}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((item, index) => (
            <Text
              key={item}
              style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.3,
    alignSelf: 'center',
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#21f516',
  },
  dot: {
    margin: 3,
    color: '#fff',
  },
});

export default BannerSlider;
