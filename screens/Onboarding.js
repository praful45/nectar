import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/onBording.png')}
        style={styles.bgImage}>
        <View style={styles.onBoardItems}>
          <Image
            source={require('../assets/carrotLogo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcome}> Welcome</Text>
          <Text style={styles.welcome}> to our store</Text>
          <Text style={styles.subTxt}>
            {' '}
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => navigation.navigate('TabApp')}>
            <Text style={styles.txtBtn}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 56,
    width: 48,
    marginBottom: 20,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
  },
  txtBtn: {
    fontSize: 18,
    marginVertical: 24.5,
    marginHorizontal: 127,
    textAlign: 'center',
    width: '100%',
    color: '#fff',
    fontFamily: 'Gilroy-Light',
    fontWeight: '700',
  },
  onBoardItems: {
    alignItems: 'center',
    paddingBottom: 54,
    position: 'absolute',
    bottom: 0,
  },
  welcome: {
    fontSize: 42,
    color: '#fff',
    fontFamily: 'Gilroy-ExtraBold',
    fontWeight: '200',
  },
  subTxt: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'Gilroy-Light',
    marginTop: 12,
  },
});

export default Onboarding;
