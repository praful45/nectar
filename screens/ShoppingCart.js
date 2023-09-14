import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FavoriteCard from '../components/FavoriteComponents/FavoriteCard';
import {Text} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {deleteFromCart, getTotalPrice} from '../components/slices/appSlice';

const ShoppingCart = () => {
  const navigation = useNavigation();
  const carts = useSelector(state => state.appItems.carts);
  const dispatch = useDispatch();

  const subTotal = useSelector(getTotalPrice);
  const shippingCharges = subTotal === 0 ? 0 : 1.6;
  const total = (subTotal + shippingCharges).toFixed(2);

  const handlePress = () => {
    // eslint-disable-next-line eqeqeq
    if (total == 0) {
      return;
    }
    navigation.navigate('ShippingMethod');
  };

  const renderItem = ({item}) => {
    return (
      <Swipeable renderRightActions={() => rightSwipe(item)}>
        <FavoriteCard data={item} />
      </Swipeable>
    );
  };

  const handleDelete = id => {
    dispatch(deleteFromCart(id));
  };

  const rightSwipe = item => {
    return (
      <TouchableOpacity
        style={styles.right_swipe}
        activeOpacity={0.7}
        onPress={() => handleDelete(item.id)}>
        <View>
          <AntDesign name="delete" color="#fff" size={38} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.shoppingcart_main_view}>
        <GestureHandlerRootView>
          <View>
            <FlatList
              data={carts}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.shoppingcart_list_view}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </GestureHandlerRootView>
      </View>
      <View style={styles.checkout_view}>
        <View style={styles.checkout_info_flex}>
          <View style={styles.checkout_info}>
            <Text style={styles.checkout_info_text1}>SubTotal</Text>
            <Text style={styles.checkout_info_text2}>
              ${subTotal.toFixed(2)}
            </Text>
          </View>
          <View style={styles.checkout_info}>
            <Text style={styles.checkout_info_text1}>Shipping Charges</Text>
            <Text style={styles.checkout_info_text2}>${shippingCharges}</Text>
          </View>
        </View>
        <View style={[styles.checkout_info, styles.checkout_info_total_view]}>
          <Text style={styles.checkout_info_total}>Total</Text>
          <Text style={styles.checkout_info_total_price}>${total}</Text>
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
  shoppingcart_list_view: {
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
  right_swipe: {
    backgroundColor: '#ff4a4a',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShoppingCart;
