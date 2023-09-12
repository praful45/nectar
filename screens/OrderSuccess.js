import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderSuccess = () => {
  return (
    <View style={styles.order_success_wrapper}>
      <View style={styles.order_success_box}>
        <MaterialComIcon name="shopping-outline" size={96} color="#6CC51D" />
        <Text style={styles.order_success_text}>
          Your order was succesfull !
        </Text>
        <Text style={styles.order_success_desc}>
          You will get a response within a few minutes.
        </Text>
      </View>
      <View style={styles.btn}>
        <AppButton navigateTo="TrackOrder" btnText="Track Order" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  order_success_wrapper: {
    height: '100%',
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 17,
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    marginTop: 620,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
  order_success_text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginTop: 26,
  },
  order_success_desc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#868889',
    textAlign: 'center',
  },
  order_success_box: {
    flex: 1,
    alignItems: 'center',
    width: 240,
    paddingTop: 200,
  },
});

export default OrderSuccess;
