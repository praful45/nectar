import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FavoriteCard from '../components/FavoriteComponents/FavoriteCard';

const TrackOrder = () => {
  return (
    <View style={styles.track_order_container}>
      <View style={styles.track_order_section}>
        <View style={styles.track_order_icon}>
          <Feather name="package" size={32} color="#28B446" />
        </View>
        <View style={styles.track_order_info}>
          <Text style={styles.track_order_number}>Order #90897</Text>
          <Text style={styles.track_order_date}>Placed on Octobar 19 2021</Text>
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
      </View>
      <ScrollView contentContainerStyle={styles.track_order_body_wrapper}>
        {/* this can be optimized */}
        <View style={styles.track_order_body_section}>
          <View style={styles.track_order_icon}>
            <Feather name="package" size={32} color="#28B446" />
          </View>
          <View style={styles.track_order_body_info}>
            <Text style={styles.track_order_number}>Order Placed</Text>
            <Text style={styles.track_order_date}>Octobar 19 2021</Text>
          </View>
        </View>
        <View style={styles.track_order_body_section}>
          <View style={styles.track_order_icon}>
            <Feather name="package" size={32} color="#28B446" />
          </View>
          <View style={styles.track_order_body_info}>
            <Text style={styles.track_order_number}>Order Placed</Text>
            <Text style={styles.track_order_date}>Octobar 19 2021</Text>
          </View>
        </View>
        <View style={styles.track_order_body_section}>
          <View style={styles.track_order_icon}>
            <Feather name="package" size={32} color="#28B446" />
          </View>
          <View style={styles.track_order_body_info}>
            <Text style={styles.track_order_number}>Order Placed</Text>
            <Text style={styles.track_order_date}>Octobar 19 2021</Text>
          </View>
        </View>
        <View style={styles.track_order_body_section}>
          <View style={styles.track_order_icon}>
            <Feather name="package" size={32} color="#28B446" />
          </View>
          <View style={styles.track_order_body_info}>
            <Text style={styles.track_order_number}>Order Placed</Text>
            <Text style={styles.track_order_date}>Octobar 19 2021</Text>
          </View>
        </View>
        <View style={styles.track_order_body_section}>
          <View style={styles.track_order_icon}>
            <Feather name="package" size={32} color="#28B446" />
          </View>
          <View style={styles.track_order_body_info}>
            <Text style={styles.track_order_number}>Order Placed</Text>
            <Text style={styles.track_order_date}>Octobar 19 2021</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  track_order_container: {
    paddingHorizontal: 17,
    paddingTop: 20,
    backgroundColor: '#F4F5F9',
    flex: 1,
  },
  track_order_icon: {
    padding: 16,
    backgroundColor: '#EBFFD7',
    borderRadius: 30,
  },
  track_order_section: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 20,
    gap: 15,
    alignItems: 'center',
    marginBottom: 9,
  },
  track_order_body_section: {
    paddingTop: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    gap: 15,
    alignItems: 'center',
  },
  track_order_body_wrapper: {
    marginTop: 10,
    paddingBottom: 20,
  },
  track_order_number: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
  },
  track_order_date: {
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
  track_order_info: {
    flex: 1,
  },
  track_order_body_info: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 17,
    justifyContent: 'center',
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
});

export default TrackOrder;
