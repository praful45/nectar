import React from 'react';
import PaymentMethodForm from '../cards/PaymentMethodForm';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import AppButton from '../buttonComponents/AppButton';
import {useNavigation} from '@react-navigation/native';
import {credit_card} from '../images';

const AddCreditCard = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('OrderSuccess');
  };
  return (
    <View style={styles.main_wrapper}>
      <View>
        <ScrollView contentContainerStyle={styles.payment_method_scroll}>
          <View>
            <Image source={credit_card} style={styles.img} />
          </View>
          <PaymentMethodForm />
        </ScrollView>
      </View>
      <View style={styles.btn}>
        <AppButton onPress={handlePress} btnText="Add Credit Card" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_wrapper: {
    paddingHorizontal: 17,
    backgroundColor: '#F4F5F9',
    height: '100%',
    paddingTop: 32,
  },
  payment_method_wrapper: {
    backgroundColor: '#F4F5F9',
    height: '87%',
  },
  payment_method_wrapper_keyboard_open: {
    backgroundColor: '',
    height: '100%',
  },
  btn: {
    position: 'absolute',
    marginTop: 620,
    marginHorizontal: 17,
    width: '100%',
  },
  payment_options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 22,
    marginTop: 20,
    marginBottom: 18,
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
  },
});

export default AddCreditCard;
