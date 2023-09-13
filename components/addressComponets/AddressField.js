import React, {useState} from 'react';
import {StyleSheet, ScrollView, TextInput, View, Text} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';

const AddressField = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView contentContainerStyle={styles.form_address}>
      <View style={styles.input_box}>
        <MaterialComIcon
          name="account-circle-outline"
          color={'#969696'}
          size={24}
          style={styles.icon}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#868889"
          style={styles.input}
        />
      </View>
      <View style={styles.input_box}>
        <Fontisto
          name="email"
          color={'#969696'}
          size={23}
          style={styles.icon}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#868889"
          style={styles.input}
        />
      </View>
      <View style={styles.input_box}>
        <Feather style={styles.icon} name="phone" color={'#868889'} size={24} />
        <TextInput
          keyboardType="number-pad"
          placeholder="Phone Number"
          placeholderTextColor="#868889"
          style={styles.input}
        />
      </View>
      <View style={styles.input_box}>
        <Feather
          style={styles.icon}
          name="map-pin"
          color={'#868889'}
          size={24}
        />
        <TextInput
          placeholder="Address"
          placeholderTextColor="#868889"
          style={styles.input}
        />
      </View>
      <View style={styles.input_box}>
        <Feather style={styles.icon} name="map" color={'#868889'} size={24} />
        <TextInput
          placeholder="City"
          placeholderTextColor="#868889"
          style={styles.input}
        />
      </View>
      <View style={styles.input_box}>
        <FA5 style={styles.icon} name="map-pin" color={'#868889'} size={24} />
        <TextInput
          placeholder="Zip Code"
          placeholderTextColor="#868889"
          style={styles.input}
        />
      </View>
      <View style={styles.input_box}>
        <SimpleLineIcon
          style={styles.icon}
          name="globe"
          color={'#868889'}
          size={24}
        />
        <TextInput
          placeholder="Country"
          placeholderTextColor="#868889"
          style={styles.input}
        />
        <AntDesign
          name="caretdown"
          size={14}
          color="#C4C4C4"
          style={styles.icon_right}
        />
      </View>
      <View style={styles.switch}>
        <ToggleSwitch
          isOn={isEnabled}
          size="small"
          onColor="#6CC51D"
          offColor="#C0C0C0"
          onToggle={toggleSwitch}
        />
        <Text style={styles.make_default}>Save this address</Text>
      </View>
    </ScrollView>
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

export default AddressField;
