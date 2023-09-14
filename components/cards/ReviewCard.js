import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {profile_pic} from '../images';

const ReviewCard = () => {
  return (
    <View style={styles.review_card_wrapper}>
      <View style={styles.review_account_info}>
        <Image source={profile_pic} style={styles.profile_img} />
        <View style={styles.user_name_time}>
          <Text style={styles.user_name}>John Doe</Text>
          <Text style={styles.user_time}>32 minutes ago </Text>
        </View>
      </View>
      <View style={styles.user_rating_review}>
        <View style={styles.rating}>
          <Text style={styles.user_review_number}>4.5</Text>
          <Rating
            ratingCount={5}
            fractions={1}
            jumpValue={0.5}
            startingValue={4.5}
            imageSize={14}
            type="custom"
            ratingBackgroundColor="#868889"
            ratingColor="#FFC107"
            readonly
            style={styles.rating_star}
          />
        </View>
        <Text style={styles.user_review_txt}>
          Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed diam
          nonumy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  review_card_wrapper: {
    backgroundColor: '#fff',
    padding: 20,
  },
  profile_img: {
    height: 42,
    width: 42,
    borderRadius: 50,
    borderColor: 'black',
  },
  review_account_info: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
    marginBottom: 16,
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    gap: 3,
  },
  user_name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    includeFontPadding: false,
    textAlignVertical: 'center',
    color: '#000',
  },
  user_time: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#868889',
    includeFontPadding: false,
  },
  user_review_txt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#868889',
  },
  user_review_number: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#000',
    textAlignVertical: 'center',
  },
  rating_star: {
    marginTop: 1,
  },
  user_rating_review: {
    gap: 5,
  },
});

export default ReviewCard;
