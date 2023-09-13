import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FavoriteCard from '../components/FavoriteComponents/FavoriteCard';
import {Text} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import {useNavigation} from '@react-navigation/native';

const ShoppingCart = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ShippingMethod');
  };
  return (
    <View>
      <View style={styles.shoppingcart_main_view}>
        <ScrollView contentContainerStyle={styles.shoppingcart_scroll_view}>
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </ScrollView>
      </View>
      <View style={styles.checkout_view}>
        <View style={styles.checkout_info_flex}>
          <View style={styles.checkout_info}>
            <Text style={styles.checkout_info_text1}>SubTotal</Text>
            <Text style={styles.checkout_info_text2}>$56.7</Text>
          </View>
          <View style={styles.checkout_info}>
            <Text style={styles.checkout_info_text1}>Shipping Charges</Text>
            <Text style={styles.checkout_info_text2}>$1.6</Text>
          </View>
        </View>
        <View style={[styles.checkout_info, styles.checkout_info_total_view]}>
          <Text style={styles.checkout_info_total}>Total</Text>
          <Text style={styles.checkout_info_total_price}>$58.2</Text>
        </View>
        <View style={styles.btn}>
          <AppButton onPress={handlePress} btnText="Checkout" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingcart_main_view: {
    backgroundColor: '#F4F5F9',
    height: '67%',
  },
  shoppingcart_scroll_view: {
    paddingHorizontal: 17,
    paddingVertical: 25,
    gap: 10,
  },
  checkout_view: {
    backgroundColor: '#fff',
    paddingHorizontal: 17,
    paddingTop: 22,
    paddingBottom: 36,
  },
  checkout_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkout_info_total_view: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
  },
  checkout_info_text1: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    flex: 1,
  },
  checkout_info_text2: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  checkout_info_total: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    flex: 1,
  },
  checkout_info_total_price: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  checkout_info_flex: {
    gap: 7,
  },
  btn: {
    marginTop: 13,
  },
});

export default ShoppingCart;
