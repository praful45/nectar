import React, {useState} from 'react';
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
import AppButton from '../../components/buttonComponents/AppButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {authentication} from '../../FirebaseConfig';
import {useDispatch} from 'react-redux';
import {
  changeLoggedInStatus,
  addUserInfo,
} from '../../components/slices/appSlice';
import {auth_login} from '../../components/images';

const AuthLogin = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const dispatch = useDispatch();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePress = () => {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email address is required');
      return;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    } else if (password.length < 6) {
      setPasswordError('Password Length should be at least 6.');
      return;
    }

    if (!emailError && !passwordError) {
      signInWithEmailAndPassword(authentication, email, password)
        .then(userCredential => {
          const {displayName, email, phoneNumber, uid} = userCredential.user;
          dispatch(addUserInfo({displayName, email, phoneNumber, uid}));
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            Alert.alert(
              'Login Error',
              'The email or password you entered is incorrect.',
            );
          }
        });
    }

    // navigation.navigate('TabApp');
  };

  const isValidEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <ImageBackground source={auth_login} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={styles.welcomet_txt}>Welcome Back!</Text>
        <Text style={styles.description}>Sign in to your account</Text>
        <ScrollView contentContainerStyle={styles.form}>
          <View
            style={[styles.input_box, emailError ? styles.inputError : null]}>
            <Fontisto
              name="email"
              color={'#969696'}
              size={23}
              style={styles.icon}
            />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#868889"
              style={[styles.input]}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
          <View
            style={[
              styles.input_box,
              passwordError ? styles.inputError : null,
            ]}>
            <Feather
              name="lock"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#868889"
              style={[styles.input]}
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
        <View style={styles.toogle_view}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="#6CC51D"
            offColor="#ecf0f1"
            size="small"
            onToggle={toggleSwitch}
            style={styles.toggle}
          />
          <Text style={styles.remember_text}>Remember me</Text>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forget_pass_text}>Forget password</Text>
          </Pressable>
        </View>
        <View style={styles.drop_shadow}>
          <AppButton btnText="Login" onPress={handlePress} />
        </View>
        <View style={styles.bottom_txt_container}>
          <Text style={styles.have_acc_txt}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('AuthSignUp')}>
            <Text style={styles.signup_txt}>Sign Up</Text>
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
  signup_txt: {
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
  toogle_view: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  remember_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#868889',
    flex: 1,
    marginLeft: 5,
  },
  forget_pass_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#407EC7',
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

export default AuthLogin;
