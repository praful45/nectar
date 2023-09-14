import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DeliveryBoxIcon,
  DeliveryIcon,
} from '../components/svgComponents/SvgComponent';

const ApplyFilter = () => {
  const [rating, setRating] = useState(4);

  return (
    <View style={styles.apply_filter_wrapper}>
      <View style={styles.section_wrapper}>
        <Text style={styles.title}>Price Range</Text>
        <View style={styles.min_max_wrapper}>
          <View style={styles.box_wrapper}>
            <Text style={styles.box_text}>Min.</Text>
          </View>
          <View style={styles.box_wrapper}>
            <Text style={styles.box_text}>Max.</Text>
          </View>
        </View>
      </View>
      <View style={styles.section_wrapper}>
        <Text style={styles.title}>Star Rating</Text>
        <View style={styles.star_wrapper}>
          <Rating
            ratingCount={5}
            fractions={1}
            jumpValue={0.5}
            startingValue={rating}
            imageSize={15}
            type="custom"
            ratingBackgroundColor="#fff"
            ratingColor="#FFC107"
            tintColor="#F4F5F9"
            style={styles.rating_star}
          />
          <Text style={styles.box_text}>{rating} Stars</Text>
        </View>
      </View>
      <View style={[styles.section_wrapper, styles.no_border_bottom]}>
        <Text style={styles.title}>Others</Text>
        <View style={styles.others_wrapper}>
          <View style={styles.others_block}>
            <EvilIcons name="tag" color="#868889" size={24} />
            <Text style={[styles.box_text, styles.others_text]}>Discount </Text>
            <Ionicons
              name="checkmark-circle-outline"
              color="#868889"
              size={20}
            />
          </View>
        </View>
        <View style={styles.others_wrapper}>
          <View style={styles.others_block}>
            <DeliveryIcon />
            <Text style={[styles.box_text, styles.others_text]}>
              Free Shipping
            </Text>
            <Ionicons
              name="checkmark-circle-outline"
              color="#868889"
              size={20}
            />
          </View>
        </View>
        <View style={styles.others_wrapper}>
          <View
            style={[
              styles.others_block,
              styles.no_border_bottom,
              styles.no_padding_bottom,
            ]}>
            <DeliveryBoxIcon />
            <Text style={[styles.box_text, styles.others_text]}>
              Same Day Delivery{' '}
            </Text>
            <Ionicons
              name="checkmark-circle-outline"
              color="#6CC51D"
              size={20}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  apply_filter_wrapper: {
    backgroundColor: '#F4F5F9',
    height: '100%',
    paddingHorizontal: 17,
    paddingVertical: 21,
  },
  section_wrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
    paddingTop: 16,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
  },
  min_max_wrapper: {
    flexDirection: 'row',
    gap: 7,
    flexWrap: 'wrap',
    marginTop: 15,
  },
  box_wrapper: {
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 5,
    flex: 1,
  },
  star_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 5,
    marginTop: 15,
  },
  box_text: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    includeFontPadding: false,
    paddingBottom: 0,
  },
  no_border_bottom: {
    borderBottomWidth: 0,
  },
  others_block: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  others_text: {
    flex: 1,
    marginLeft: 22,
  },
  no_padding_bottom: {
    paddingBottom: 0,
  },
});

export default ApplyFilter;
