import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({onPress, btnText, style, disabled}) => {
  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  const buttonStyles = [styles.btn, style];

  return (
    <Pressable onPress={handlePress}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 1]}
        colors={disabled ? ['#a6a6a6', '#a6a6a6'] : ['#AEDC81', '#6CC51D']}
        style={buttonStyles}>
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
