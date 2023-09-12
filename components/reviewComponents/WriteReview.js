import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import AppButton from '../buttonComponents/AppButton';
import {Rating} from 'react-native-ratings';

const WriteReview = () => {
  return (
    <View style={styles.write_review_wrapper}>
      <Text style={styles.write_review_question}>What do you think?</Text>
      <Text style={styles.write_review_hint}>
        please give your rating by clicking on the stars below
      </Text>
      <Rating
        ratingCount={5}
        fractions={1}
        jumpValue={0.5}
        startingValue={4.5}
        imageSize={35}
        type="custom"
        ratingBackgroundColor="#fff"
        tintColor="#F4F5F9"
        ratingColor="#FFC107"
        minValue={1}
      />
      <TextInput
        style={styles.write_review_text_input}
        placeholder="Tell us about your experience"
        placeholderTextColor="#868889"
        multiline={true}
      />
      <View style={styles.btn}>
        <AppButton btnText="Start Shopping" navigateTo="Home" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  write_review_wrapper: {
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 17,
    paddingTop: 45,
    height: '100%',
  },
  write_review_question: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    textAlign: 'center',
  },
  write_review_hint: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  write_review_text_input: {
    backgroundColor: '#fff',
    height: 164,
    color: '#000',
    textAlignVertical: 'top',
    paddingVertical: 23,
    paddingHorizontal: 18,
    borderRadius: 5,
    marginTop: 36,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
});

export default WriteReview;
