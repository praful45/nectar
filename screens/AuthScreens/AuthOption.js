import {View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleLogo} from '../../components/svgComponents/SvgComponent';
import {useNavigation} from '@react-navigation/native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {auth_option_img} from '../../components/images';

const AuthOption = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={auth_option_img} style={styles.bgImg}>
      <View style={styles.container}>
        <Text style={styles.welcomet_txt}>Welcome</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <View style={styles.buttons}>
          <Pressable style={styles.btn}>
            <GoogleLogo />
            <Text style={styles.btn_txt}>Continue with google</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('AuthSignUp')}>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              locations={[0, 1]}
              colors={['#AEDC81', '#6CC51D']}
              style={styles.btn}>
              <MaterialComIcon
                name="account-circle-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.btn_acc_txt}>create an account</Text>
            </LinearGradient>
          </Pressable>
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
    fontFamily: 'Poppins-Medium',
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
  buttons: {
    gap: 12,
    paddingVertical: 20,
  },
});

export default AuthOption;
