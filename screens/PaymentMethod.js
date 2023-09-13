import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Keyboard} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import StepIndicatorCard from '../components/cards/StepIndicatorCard';
import PaymentTypeCard from '../components/cards/PaymentTypeCard';
import PaymentMethodForm from '../components/cards/PaymentMethodForm';
import {useNavigation} from '@react-navigation/native';

const PaymentMethod = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('OrderSuccess');
  };

  useEffect(() => {
    const openKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const closeKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });
    return () => {
      openKeyboard.remove();
      closeKeyboard.remove();
    };
  }, []);

  return (
    <View style={styles.main_wrapper}>
      <View
        style={
          isKeyboardOpen
            ? styles.payment_method_wrapper_keyboard_open
            : styles.payment_method_wrapper
        }>
        <StepIndicatorCard pos={2} />
        <ScrollView contentContainerStyle={styles.payment_method_scroll}>
          <View style={styles.payment_options}>
            <PaymentTypeCard />
            <PaymentTypeCard />
            <PaymentTypeCard />
          </View>
          <View>
            <Image
              source={require('../assets/credit-card.png')}
              style={styles.img}
            />
          </View>
          <PaymentMethodForm />
        </ScrollView>
      </View>
      <View style={styles.btn}>
        <AppButton onPress={handlePress} btnText="Make a Payment" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_wrapper: {
    paddingHorizontal: 17,
    backgroundColor: '#F4F5F9',
    height: '100%',
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
  payment_method_scroll: {},
});

export default PaymentMethod;
