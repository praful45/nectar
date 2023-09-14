import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import AppButton from '../components/buttonComponents/AppButton';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const OrderSuccess = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('TrackOrder');
  };
  return (
    <View style={styles.order_success_wrapper}>
      <View style={styles.order_success_box}>
        <MaterialComIcon name="shopping-outline" size={96} color="#6CC51D" />
        <Text style={styles.order_success_text}>
          Your order was succesfull !
        </Text>
        <Text style={styles.order_success_desc}>
          You will get a response within a few minutes.
        </Text>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={styles.go_to_home}>Go to HOME</Text>
        </Pressable>
      </View>
      <View style={styles.btn}>
        <AppButton onPress={handlePress} btnText="Track Order" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  order_success_wrapper: {
    height: '100%',
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 17,
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    marginTop: 620,
    marginHorizontal: 17,
    width: '100%',
    marginBottom: 20,
  },
  order_success_text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginTop: 26,
  },
  order_success_desc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#868889',
    textAlign: 'center',
  },
  order_success_box: {
    flex: 1,
    alignItems: 'center',
    width: 240,
    paddingTop: 200,
  },
  go_to_home: {
    color: 'blue',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
});

export default OrderSuccess;
