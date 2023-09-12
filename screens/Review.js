import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ReviewCard from '../components/cards/ReviewCard';

const Review = () => {
  return (
    <View style={styles.review_wrapper}>
      <ScrollView contentContainerStyle={styles.scrolview_wrapper}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  review_wrapper: {
    backgroundColor: '#F4F5F9',
    height: '100%',
  },
  scrolview_wrapper: {
    paddingHorizontal: 17,
    paddingVertical: 25,
    gap: 10,
  },
});

export default Review;
