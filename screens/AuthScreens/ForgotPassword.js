import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import AppButton from '../../components/buttonComponents/AppButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePress = () => {
    if (!email) {
      setEmailError('Email address is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
      Alert.alert('Success', 'Password Reset Mail Sent Successfully.', [
        {
          text: 'Ok',
          onPress: () => {
            navigation.navigate('AuthLogin');
          },
        },
      ]);
    }
  };

  const isValidEmail = isEmail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(isEmail);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>
        Enter your email address to reset the password.
      </Text>
      <View style={styles.input_button_wrapper}>
        <View style={[styles.input_box, emailError ? styles.inputError : null]}>
          <Fontisto
            name="email"
            color={'#969696'}
            size={23}
            style={styles.icon}
          />
          <TextInput
            textContentType="emailAddress"
            placeholder="Email Address"
            placeholderTextColor="#868889"
            style={[styles.input]}
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <View>
          <AppButton btnText="Send link" onPress={handlePress} />
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
  input_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
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
  icon: {
    paddingLeft: 18,
    paddingRight: 20,
    marginVertical: 18,
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
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default ForgotPassword;
