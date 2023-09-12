import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ToggleSwitch from 'toggle-switch-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CreditCardFormCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.my_address_form_wrapper}>
      <View style={styles.form_address}>
        <View style={styles.input_box}>
          <MaterialComIcon
            name="account-circle-outline"
            color={'#969696'}
            size={18}
            style={styles.icon}
          />
          <TextInput
            placeholder="Russell Austin"
            placeholderTextColor="#868889"
            style={styles.input}
          />
        </View>
        <View style={styles.input_box}>
          <AntDesign
            style={styles.icon}
            name="creditcard"
            color={'#868889'}
            size={18}
          />
          <TextInput
            placeholder="XXXX  XXXX  XXXX  5678"
            placeholderTextColor="#868889"
            style={styles.input}
          />
        </View>
        <View style={styles.two_field}>
          <View style={[styles.input_box, styles.input_box_1]}>
            <Feather
              style={styles.icon}
              name="calendar"
              color={'#868889'}
              size={18}
            />
            <TextInput
              placeholder="01/22"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
          <View style={[styles.input_box, styles.input_box_2]}>
            <Feather
              style={styles.icon}
              name="lock"
              color={'#868889'}
              size={18}
            />
            <TextInput
              placeholder="908"
              placeholderTextColor="#868889"
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <View style={styles.switch}>
        <ToggleSwitch
          isOn={isEnabled}
          size="small"
          onColor="#6CC51D"
          offColor="#ecf0f1"
          onToggle={toggleSwitch}
        />
        <Text style={styles.make_default}>Make default</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  my_address_form_wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 31,
    height: '100%',
  },
  input_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F5F9',
    borderRadius: 5,
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#868889',
    flex: 1,
    paddingTop: 13,
    paddingRight: 10,
    paddingBottom: 14,
    paddingLeft: 0,
    backgroundColor: '#F4F5F9',
    includeFontPadding: false,
    borderRadius: 5,
  },
  icon: {
    paddingLeft: 18,
    paddingRight: 20,
  },
  form_address: {
    gap: 5,
  },
  two_field: {
    flexDirection: 'row',
    gap: 5,
  },
  input_box_1: {
    flex: 1,
  },
  input_box_2: {
    flex: 1,
  },
  switch: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  make_default: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    includeFontPadding: false,
  },
});

export default CreditCardFormCard;
