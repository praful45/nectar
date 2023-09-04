import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppButtonIcon = ({navigateTo, btnText, iconName}) => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable onPress={() => navigation.navigate(navigateTo)}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 1]}
          colors={['#AEDC81', '#6CC51D']}
          style={styles.btn}>
          <Text style={styles.btn_txt}>{btnText}</Text>
          <MaterialComIcon name={iconName} size={24} color="#fff" />
        </LinearGradient>
      </Pressable>
    </>
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
    marginTop: 13,
  },
  btn_txt: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    flex: 1,
    marginLeft: '37%',
  },
});

export default AppButtonIcon;
