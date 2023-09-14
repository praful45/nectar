import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreditCardFormCard from './CreditCardFormCard';
import {master_card} from '../images';

const CreditCardCard = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <View style={styles.credit_card_card_wrapper}>
      <View
        style={[
          styles.credit_card_card_heading_section,
          !collapse && styles.credit_card_card_divider,
        ]}>
        <View style={styles.credit_card_card_icon}>
          <Image source={master_card} />
        </View>
        <View style={styles.credit_card_card_info}>
          <Text style={styles.credit_card_card_name}>Russell Austin</Text>
          <Text style={styles.credit_card_card_number}>
            XXXX XXXX XXXX 5678
          </Text>
          <View style={styles.expiry_cvv_main_wrapper}>
            <View style={styles.expiry_cvv_wrapper}>
              <Text style={styles.expiry_cvv_title}>Expiry</Text>
              <Text style={styles.expiry_cvv}>: 01/22</Text>
            </View>
            <View style={styles.expiry_cvv_wrapper}>
              <Text style={styles.expiry_cvv_title}>CVV</Text>
              <Text style={styles.expiry_cvv}>: 908</Text>
            </View>
          </View>
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
        <CreditCardFormCard />
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  credit_card_card_icon: {
    width: 66,
    height: 66,
    backgroundColor: '#F5F5F5',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  credit_card_card_wrapper: {
    backgroundColor: '#F4F5F9',
  },
  credit_card_card_heading_section: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 20,
    gap: 15,
    alignItems: 'center',
  },
  credit_card_card_divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  credit_card_card_name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
  },
  credit_card_card_number: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#868889',
  },
  expiry_cvv: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#000000',
  },
  expiry_cvv_title: {
    fontFamily: 'Posppins-Regular',
    fontSize: 10,
    color: '#000',
  },
  credit_card_card_info: {
    flex: 1,
  },
  expiry_cvv_wrapper: {
    flexDirection: 'row',
  },
  expiry_cvv_main_wrapper: {
    flexDirection: 'row',
    gap: 22,
  },
});

export default CreditCardCard;
