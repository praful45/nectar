import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import MyAddressCard from '../cards/MyAddressCard';
import AppButton from '../buttonComponents/AppButton';
import StepIndicator from '../stepIndicators/StepIndicator';

const MyAddress = () => {
  return (
    <View style={styles.my_address_wrapper}>
      <StepIndicator
        stepCount={5}
        currentPosition={2}
        indicatorSize={15}
        unfinishedColor="gray"
        currentColor="blue"
        finishedColor="green"
        finishedLineColor="green"
        unfinishedLineColor="gray"
        connectorWidth={1}
        connectorHeight={10}
      />
      <ScrollView contentContainerStyle={styles.my_address_scrollview}>
        <MyAddressCard />
        <MyAddressCard />
      </ScrollView>
      <View style={styles.btn}>
        <AppButton btnText="Save Settings" />
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
