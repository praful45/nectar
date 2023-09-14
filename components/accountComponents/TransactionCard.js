import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {master_card} from '../images';

const TransactionCard = () => {
  return (
    <View style={styles.transaction_card_main}>
      <View style={styles.transaction_card_img_view}>
        <Image source={master_card} />
      </View>
      <View style={styles.transaction_card_info}>
        <Text style={styles.transaction_card_name}>Master Card</Text>
        <Text style={styles.transaction_card_date_time}>
          Dec 12 2020 at 10:00
        </Text>
      </View>
      <Text style={styles.transaction_card_amount}>$89</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction_card_main: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 14,
    gap: 20,
  },
  transaction_card_img_view: {
    backgroundColor: '#F5F5F5',
    width: 52,
    height: 52,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transaction_card_info: {
    flex: 1,
  },
  transaction_card_name: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  transaction_card_date_time: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  transaction_card_amount: {
    color: '#28B446',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
});

export default TransactionCard;
