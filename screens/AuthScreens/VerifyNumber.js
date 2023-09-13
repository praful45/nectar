import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppButton from '../../components/buttonComponents/AppButton';
import {useNavigation} from '@react-navigation/native';

const VerifyNumber = () => {
  const rf1 = useRef();
  const rf2 = useRef();
  const rf3 = useRef();
  const rf4 = useRef();
  const rf5 = useRef();
  const rf6 = useRef();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  const [count, setCount] = useState(30);
  const [canResend, setCanResend] = useState(true);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('AuthLogin');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        setCount(30);
        setCanResend(true);
        clearInterval(interval);
      } else if (!canResend) {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count, canResend]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <Text style={styles.title}>Verify Your Number</Text>
      <Text style={styles.description}>Enter your OTP code below</Text>
      <View style={styles.input_button_wrapper}>
        <View style={styles.otp_view}>
          <TextInput
            style={styles.inputView}
            ref={rf1}
            keyboardType="number-pad"
            maxLength={1}
            value={otp1}
            onChangeText={txt => {
              setOtp1(txt);
              if (txt.length >= 1) {
                rf2.current.focus();
              }
            }}
          />
          <TextInput
            style={styles.inputView}
            ref={rf2}
            keyboardType="number-pad"
            maxLength={1}
            value={otp2}
            onChangeText={txt => {
              setOtp2(txt);
              if (txt.length >= 1) {
                rf3.current.focus();
              } else if (txt.length < 1) {
                rf1.current.focus();
              }
            }}
          />
          <TextInput
            style={styles.inputView}
            ref={rf3}
            keyboardType="number-pad"
            maxLength={1}
            value={otp3}
            onChangeText={txt => {
              setOtp3(txt);
              if (txt.length >= 1) {
                rf4.current.focus();
              } else if (txt.length < 1) {
                rf2.current.focus();
              }
            }}
          />
          <TextInput
            style={styles.inputView}
            ref={rf4}
            keyboardType="number-pad"
            maxLength={1}
            value={otp4}
            onChangeText={txt => {
              setOtp4(txt);
              if (txt.length >= 1) {
                rf5.current.focus();
              } else if (txt.length < 1) {
                rf3.current.focus();
              }
            }}
          />
          <TextInput
            style={styles.inputView}
            ref={rf5}
            keyboardType="number-pad"
            maxLength={1}
            value={otp5}
            onChangeText={txt => {
              setOtp5(txt);
              if (txt.length >= 1) {
                rf6.current.focus();
              } else if (txt.length < 1) {
                rf4.current.focus();
              }
            }}
          />
          <TextInput
            style={styles.inputView}
            ref={rf6}
            keyboardType="number-pad"
            maxLength={1}
            value={otp6}
            onChangeText={txt => {
              setOtp6(txt);
              if (txt.length >= 1) {
                rf6.current.focus();
              } else if (txt.length < 1) {
                rf5.current.focus();
              }
            }}
          />
        </View>
        <View>
          <AppButton
            btnText="Verify OTP"
            onPress={handlePress}
            style={styles.btn_style}
            disabled={
              otp1 !== '' &&
              otp2 !== '' &&
              otp3 !== '' &&
              otp4 !== '' &&
              otp5 !== '' &&
              otp6 !== ''
                ? false
                : true
            }
          />
        </View>
        <Text style={styles.resend_txt1}>Did'nt receive the code?</Text>
        {canResend ? (
          <Pressable onPress={() => setCanResend(false)}>
            <Text style={styles.resend_txt2}>Resend a new code</Text>
          </Pressable>
        ) : (
          <Text style={styles.resend_txt3}>Resend in {count} seconds</Text>
        )}
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
  otp_view: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  inputView: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 5,
    elevation: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    includeFontPadding: false,
    color: '#000',
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
  btn_style: {
    elevation: 8,
  },
  resend_txt1: {
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
  resend_txt2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#1A0DAB',
    textAlign: 'center',
  },
  resend_txt3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#868889',
    textAlign: 'center',
  },
});

export default VerifyNumber;
