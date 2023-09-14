import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyAddressFormCard from './MyAddressFormCard';
import {my_address} from '../images';

const MyAddressCard = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <View style={styles.my_address_card_wrapper}>
      <View
        style={[
          styles.my_address_card_heading_section,
          !collapse && styles.my_address_card_divider,
        ]}>
        <View style={styles.my_address_card_home_icon}>
          <Image source={my_address} />
        </View>
        <View style={styles.my_address_card_info}>
          <Text style={styles.my_address_card_name}>Russell Austin</Text>
          <Text style={styles.my_address_card_address}>
            2811 Crescent Day. LA Port
          </Text>
          <Text style={styles.my_address_card_address}>
            California, United States 77571
          </Text>
          <Text style={styles.my_address_card_phone}>+1 202 555 0142 </Text>
        </View>
        <Pressable onPress={() => setCollapse(!collapse)}>
          {collapse ? (
            <MaterialComIcon
              name="arrow-down-drop-circle-outline"
              size={24}
              color="#6CC51D"
            />
          ) : (
            <MaterialComIcon
              name="arrow-up-drop-circle-outline"
              size={24}
              color="#6CC51D"
            />
          )}
        </Pressable>
      </View>
      <Collapsible collapsed={collapse}>
        <MyAddressFormCard />
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  my_address_card_home_icon: {
    width: 66,
    height: 66,
    backgroundColor: '#EBFFD7',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  my_address_card_wrapper: {
    backgroundColor: '#F4F5F9',
  },
  my_address_card_heading_section: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 20,
    gap: 15,
    alignItems: 'center',
  },
  my_address_card_divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  my_address_card_name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
  },
  my_address_card_address: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#868889',
  },
  my_address_card_phone: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#000',
  },
  my_address_card_info: {
    flex: 1,
  },
});

export default MyAddressCard;
