import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({navigateTo, btnText}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(navigateTo)}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 1]}
        colors={['#AEDC81', '#6CC51D']}
        style={styles.btn}>
        <Text style={styles.btn_txt}>{btnText}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#AEDC81',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 18,
  },
  btn_txt: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
});

export default AppButton;
