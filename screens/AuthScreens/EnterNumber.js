import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import AppButton from '../../components/buttonComponents/AppButton';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';

const EnterNumber = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('VerifyNumber');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <Text style={styles.title}>Enter Number</Text>
      <Text style={styles.description}>Enter your phone number to get OTP</Text>
      <View style={styles.input_button_wrapper}>
        <View>
          <PhoneInput
            defaultCode="NP"
            autoFocus
            containerStyle={styles.phone_input}
            textContainerStyle={styles.textContainerStyle}
            textInputProps={{
              style: {
                color: '#000',
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Poppins-Medium',
                paddingTop: 15,
              },
            }}
          />
        </View>
        <View>
          <AppButton btnText="Next" onPress={handlePress} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 17,
    backgroundColor: '#F4F5F9',
  },
  phone_input: {
    width: '100%',
    borderRadius: 5,
  },
  textContainerStyle: {
    backgroundColor: '#fff',
    paddingVertical: 0,
    borderLeftWidth: 1,
    borderColor: '#C4C4C4',
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#868889',
    flex: 1,
    paddingTop: 13,
    paddingRight: 10,
    paddingBottom: 14,
    paddingLeft: 0,
    backgroundColor: '#fff',
    includeFontPadding: false,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#868889',
    textAlign: 'center',
  },
  input_button_wrapper: {
    gap: 13,
    marginTop: 44,
  },
});

export default EnterNumber;
