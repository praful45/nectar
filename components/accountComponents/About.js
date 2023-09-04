import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const About = () => {
  return (
    <View style={styles.about_main}>
      <View style={styles.about_personal_details}>
        <Text style={styles.about_section_title}>Personal Details</Text>
        <View style={styles.personal_input}>
          <View style={styles.input_box}>
            <MaterialComIcon
              name="account-circle-outline"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Russell Austin"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Fontisto
              name="email"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="russell.partner@gmail.com"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Feather
              name="phone"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="+977 9878545588"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <View style={styles.about_password}>
        <Text style={styles.about_section_title}>Personal Details</Text>
        <View style={styles.personal_input}>
          <View style={styles.input_box}>
            <Feather
              name="lock"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Current Password"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
          <View style={styles.input_box}>
            <Feather
              name="lock"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="*********"
              placeholderTextColor="#868889"
              style={styles.input}
            />
            <Feather
              name="eye"
              color={'#969696'}
              size={20}
              style={styles.icon_eye}
            />
          </View>
          <View style={styles.input_box}>
            <Feather
              name="lock"
              color={'#969696'}
              size={20}
              style={styles.icon}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <View style={styles.about_btn}>
        <Pressable>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 1]}
            colors={['#AEDC81', '#6CC51D']}
            style={styles.btn}>
            <Text style={styles.btn_txt}>Save Settings</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about_main: {
    backgroundColor: '#F4F5F9',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  about_section_title: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginBottom: 13,
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
    paddingTop: 18,
    paddingRight: 10,
    paddingBottom: 18,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
  icon: {
    paddingLeft: 18,
    paddingRight: 20,
  },
  icon_eye: {paddingRight: 18},
  personal_input: {
    gap: 5,
  },
  about_personal_details: {
    marginBottom: 34,
  },
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
  about_btn: {
    // borderWidth: 1,
    height: 120,
    justifyContent: 'flex-end',
  },
});

export default About;
