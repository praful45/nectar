import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../components/buttonComponents/AppButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {authentication} from '../../FirebaseConfig';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth_signup} from '../../components/images';

const AuthSignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const handlePress = () => {
    setEmailError('');
    setPhoneNumberError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email address is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required');
      return;
    } else if (phoneNumber.length > 10) {
      setPhoneNumberError('Please enter a valid phone number');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    } else if (password.length < 6) {
      setPasswordError('Password Length should be at least 6.');
      return;
    }

    if (!emailError && !phoneNumberError && !passwordError) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then(() => {
          // Alert.alert('Success', 'User account created successfully!');
          signOut(authentication).then(() =>
            navigation.navigate('EnterNumber'),
          );
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert(
              'Duplicate Email',
              'That email address is already in use!',
            );
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
        });
    }
  };

  const isValidEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <ImageBackground source={auth_signup} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={styles.welcomet_txt}>Create account</Text>
        <Text style={styles.description}>Quickly create account</Text>
        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.input_box}>
            <Fontisto
              name="email"
              color={'#969696'}
              size={23}
              style={styles.icon}
            />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#868889"
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <View style={styles.input_box}>
            <Feather
              style={styles.icon}
              name="phone"
              color={'#868889'}
              size={24}
            />
            <TextInput
              keyboardType="number-pad"
              placeholder="Phone Number"
              placeholderTextColor="#868889"
              style={styles.input}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          {phoneNumberError ? (
            <Text style={styles.errorText}>{phoneNumberError}</Text>
          ) : null}

          <View style={styles.input_box}>
            <Feather
              name="lock"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#868889"
              style={styles.input}
              secureTextEntry={secureEntry}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Pressable onPress={() => setSecureEntry(!secureEntry)}>
              {secureEntry ? (
                <Feather
                  name="eye"
                  color={'#969696'}
                  size={20}
                  style={styles.icon_eye}
                />
              ) : (
                <Feather
                  name="eye-off"
                  color={'#969696'}
                  size={20}
                  style={styles.icon_eye}
                />
              )}
            </Pressable>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </ScrollView>
        <View style={styles.drop_shadow}>
          <AppButton btnText="Signup" onPress={handlePress} />
        </View>
        <View style={styles.bottom_txt_container}>
          <Text style={styles.have_acc_txt}>Already have an acount?</Text>
          <Pressable onPress={() => navigation.navigate('AuthLogin')}>
            <Text style={styles.login_txt}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgImg: {
    flex: 0.75,
  },
  container: {
    backgroundColor: '#F4F5F9',
    position: 'absolute',
    bottom: -190,
    paddingHorizontal: 16,
    paddingTop: 31,
    paddingBottom: 40,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  welcomet_txt: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: '#000',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#868889',
  },
  btn: {
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 18,
    elevation: 5,
    shadowColor: '#6CC51D',
  },
  btn_txt: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
  btn_acc_txt: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
  bottom_txt_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  have_acc_txt: {
    color: '#868889',
    fontFamily: 'Poppins-Light',
    fontSize: 15,
  },
  login_txt: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
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
  icon_eye: {paddingRight: 18},
  form: {
    gap: 5,
    marginTop: 26,
    marginBottom: 16,
  },
  drop_shadow: {
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#6CC51D',
    marginBottom: 20,
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

export default AuthSignUp;
