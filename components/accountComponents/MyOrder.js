import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import OrderCard from '../cards/OrderCard';

const MyOrder = () => {
  return (
    <View style={styles.credit_card_wrapper}>
      <ScrollView
        contentContainerStyle={styles.credit_card_scrollview}
        showsVerticalScrollIndicator={false}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  credit_card_wrapper: {
    backgroundColor: '#F4F5F9',
    height: '100%',
    paddingHorizontal: 17,
  },
  credit_card_scrollview: {
    paddingTop: 25,
    paddingBottom: 25,
    gap: 19,
  },
  btn: {
    position: 'absolute',
    marginTop: 620,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
});

export default MyOrder;
