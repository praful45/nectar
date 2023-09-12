import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ShippingMethodCard = () => {
  return (
    <View style={styles.shipping_method_card_wrapper}>
      <View style={styles.shipping_method_card_info}>
        <Text style={styles.shipping_method_card_title}>Standard Delivery</Text>
        <Text style={styles.shipping_method_card_description}>
          Order will be delivered between 3 - 4 business days straights to your
          doorstep.
        </Text>
      </View>
      <View>
        <Text style={styles.shipping_method_card_price}>$3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shipping_method_card_wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shipping_method_card_title: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  shipping_method_card_description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#868889',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  shipping_method_card_price: {
    color: '#6CC51D',
    fontFamily: 'Poppins-Meduim',
    fontSize: 15,
  },
  shipping_method_card_info: {
    gap: 5,
    width: 300,
  },
});

export default ShippingMethodCard;
