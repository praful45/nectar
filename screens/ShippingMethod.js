import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import StepIndicatorCard from '../components/cards/StepIndicatorCard';
import ShippingMethodCard from '../components/cards/ShippingMethodCard';
import {useNavigation} from '@react-navigation/native';

const ShippingMethod = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ShippingAddress');
  };
  return (
    <View style={styles.shipping_method_wrapper}>
      <StepIndicatorCard pos={0} />
      <View style={styles.shipping_method_card}>
        <ShippingMethodCard />
        <ShippingMethodCard />
        <ShippingMethodCard />
      </View>
      <View style={styles.btn}>
        <AppButton onPress={handlePress} btnText="Next" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shipping_method_wrapper: {
    backgroundColor: '#F4F5F9',
    height: '100%',
    paddingHorizontal: 17,
  },
  shipping_method_card: {
    marginTop: 25,
    gap: 18,
  },
  btn: {
    position: 'absolute',
    width: '100%',
    marginTop: 620,
    left: 17,
  },
});

export default ShippingMethod;
