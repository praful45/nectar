import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => navigation.navigate('ProductDetail')}
        // onPress={() => navigation.navigate('Categories')}
        style={({pressed}) => [pressed && styles.press_background]}>
        <View style={styles.product_content}>
          <Image
            source={require('../../assets/apple.png')}
            style={styles.img}
          />
          <Text style={styles.price}>$4.99</Text>
          <Text style={styles.title}>Red Apple</Text>
          <Text style={styles.pcs}>1.50lbs</Text>
        </View>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.cardBottom,
          pressed && styles.press_background,
        ]}>
        <MaterialComIcon
          name="shopping-outline"
          size={18}
          color="#6CC51D"
          style={styles.cart_icon}
        />
        <Text style={styles.add_to_cart_text}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    paddingTop: 16,
    borderRadius: 5,
    width: 170,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  press_background: {
    backgroundColor: '#d0f7d8',
    width: '100%',
  },
  pcs: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#868889',
    marginBottom: 12,
  },
  img: {
    marginTop: 20,
    marginBottom: 8,
    // borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
    // borderWidth: 1,
  },
  addBtn: {
    color: '#53B175',
    fontSize: 32,
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#EBEBEB',
    gap: 5,
    // marginTop: 12,
    paddingVertical: 12,
    width: '100%',
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6CC51D',
    // borderWidth: 1,
  },
  product_content: {
    display: 'flex',
    alignItems: 'center',
    // borderWidth: 1,
  },
  add_to_cart_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#010101',
    marginTop: 2.5,
  },
  cart_icon: {
    // borderWidth: 1,
  },
});

export default ProductCard;
