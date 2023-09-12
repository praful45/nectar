import React, {useState} from 'react';
import {StyleSheet, ScrollView, TextInput, View, Text} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import AppButton from '../buttonComponents/AppButton';
import AddressField from '../addressComponets/AddressField';

const AddAddress = () => {
  return (
    <View style={styles.my_address_form_wrapper}>
      <AddressField />
      <View style={styles.btn}>
        <AppButton btnText="Add Address" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  my_address_form_wrapper: {
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 17,
    paddingVertical: 36,
    height: '100%',
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
  icon_right: {
    marginRight: 20,
    marginLeft: 10,
  },
  form_address: {
    gap: 5,
    paddingBottom: 55,
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
    marginTop: 20,
  },
  make_default: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    includeFontPadding: false,
  },
  btn: {
    position: 'absolute',
    marginTop: 620,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
});

export default AddAddress;
