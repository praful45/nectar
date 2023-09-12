import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import CustomStepIndicator from '../stepIndicators/StepIndicator';

const OrderCard = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <View style={styles.my_order_card_wrapper}>
      <View
        style={[
          styles.my_order_card_heading_section,
          !collapse && styles.my_order_card_divider,
        ]}>
        <View style={styles.my_order_card_icon}>
          <Feather name="package" size={32} color="#28B446" />
        </View>
        <View style={styles.my_order_card_info}>
          <Text style={styles.my_order_card_number}>Order #90897</Text>
          <Text style={styles.my_order_card_date}>
            Placed on Octobar 19 2021
          </Text>
          <View style={styles.items_main_wrapper}>
            <View style={styles.item_wrapper}>
              <Text style={styles.item_number}>Items</Text>
              <Text style={styles.item_price}>: 10</Text>
            </View>
            <View style={styles.item_wrapper}>
              <Text style={styles.item_number}>Price</Text>
              <Text style={styles.item_price}>: $90.80</Text>
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
        <View style={styles.order_status}>
          <CustomStepIndicator
            stepCount={5}
            currentPosition={3}
            indicatorSize={10}
            unfinishedColor="#EBEBEB"
            currentColor="#6CC51D"
            finishedColor="#6CC51D"
            finishedLineColor="#28B446"
            unfinishedLineColor="#F4F5F9"
            connectorWidth={1.5}
            connectorHeight={15}
          />
          <View style={styles.order_status_info}>
            <View style={styles.title_date_container}>
              <Text style={styles.order_staus_title}>Order placed</Text>
              <Text style={styles.order_staus_date}>Oct 19 2021</Text>
            </View>
            <View style={styles.title_date_container}>
              <Text style={styles.order_staus_title}>Order confirmed</Text>
              <Text style={styles.order_staus_date}>Oct 19 2021</Text>
            </View>
            <View style={styles.title_date_container}>
              <Text style={styles.order_staus_title}>Order shipped</Text>
              <Text style={styles.order_staus_date}>Oct 19 2021</Text>
            </View>
            <View style={styles.title_date_container}>
              <Text style={styles.order_staus_title}>Out for delivery</Text>
              <Text style={styles.order_staus_date}>Oct 19 2021</Text>
            </View>
            <View style={styles.title_date_container}>
              <Text style={styles.order_staus_title}>Order delivered</Text>
              <Text style={styles.order_staus_date}>Oct 19 2021</Text>
            </View>
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  my_order_card_icon: {
    width: 66,
    height: 66,
    backgroundColor: '#EBFFD7',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  my_order_card_wrapper: {
    backgroundColor: '#F4F5F9',
  },
  my_order_card_heading_section: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 20,
    gap: 15,
    alignItems: 'center',
  },
  my_order_card_divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  my_order_card_number: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
  },
  my_order_card_date: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#868889',
  },
  item_price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#000000',
  },
  item_number: {
    fontFamily: 'Posppins-Regular',
    fontSize: 10,
    color: '#000',
  },
  my_order_card_info: {
    flex: 1,
  },
  item_wrapper: {
    flexDirection: 'row',
  },
  items_main_wrapper: {
    flexDirection: 'row',
    gap: 22,
  },
  order_status: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingLeft: 19,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 16,
  },
  order_staus_title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#000',
    textAlignVertical: 'center',
    includeFontPadding: false,
    flex: 1,
  },
  order_staus_date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#868889',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  order_status_info: {
    justifyContent: 'space-evenly',
    gap: 5,
    width: 290,
  },
  title_date_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default OrderCard;
