import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import StepIndicatorCard from '../components/cards/StepIndicatorCard';
import AddressField from '../components/addressComponets/AddressField';

const ShippingAddress = () => {
  return (
    <View style={styles.shipping_address_wrapper}>
      <StepIndicatorCard pos={1} />
      <View style={styles.address_field}>
        <AddressField />
      </View>
      <View style={styles.btn}>
        <AppButton navigateTo="PaymentMethod" btnText="Next" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shipping_address_wrapper: {
    height: '100%',
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 17,
  },
  btn: {
    position: 'absolute',
    marginTop: 620,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
  address_field: {
    marginTop: 40,
  },
});

export default ShippingAddress;
