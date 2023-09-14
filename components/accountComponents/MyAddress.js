import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import MyAddressCard from '../cards/MyAddressCard';
import AppButton from '../buttonComponents/AppButton';

const MyAddress = () => {
  const pressHandler = () => {
    console.log('save settings pressed');
  };
  return (
    <View style={styles.my_address_wrapper}>
      <ScrollView contentContainerStyle={styles.my_address_scrollview}>
        <MyAddressCard />
        <MyAddressCard />
      </ScrollView>
      <View style={styles.btn}>
        <AppButton btnText="Save Settings" onPress={pressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  my_address_wrapper: {
    backgroundColor: '#F4F5F9',
    height: '100%',
    paddingHorizontal: 17,
  },
  my_address_scrollview: {
    paddingTop: 25,
    paddingBottom: 100,
    gap: 19,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
});

export default MyAddress;
