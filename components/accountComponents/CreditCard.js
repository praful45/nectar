import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppButton from '../buttonComponents/AppButton';
import CreditCardCard from '../cards/CreditCardCard';

const CreditCard = () => {
  return (
    <View style={styles.credit_card_wrapper}>
      <ScrollView contentContainerStyle={styles.credit_card_scrollview}>
        <CreditCardCard />
        <CreditCardCard />
        <CreditCardCard />
      </ScrollView>
      <View style={styles.btn}>
        <AppButton btnText="Save Settings" />
      </View>
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
    paddingBottom: 100,
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

export default CreditCard;
