import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

const PaymentTypeCard = () => {
  return (
    <View style={styles.payment_type_wrapper}>
      <Foundation name="paypal" color="#868889" size={36} />
      <Text style={styles.payment_type_text}>Paypal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  payment_type_wrapper: {
    backgroundColor: '#fff',
    width: 102,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 10,
    shadowColor: 'black',
  },
  payment_type_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#868889',
  },
});

export default PaymentTypeCard;
