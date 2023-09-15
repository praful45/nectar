import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {addToCart} from '../slices/appSlice';

const ProductCard = ({item}) => {
  const {name, price, quantity, photo} = item;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(addToCart({name, price, quantity, photo}));
  };
  return (
    <View style={styles.card}>
      <Pressable
        onPress={() =>
          navigation.navigate('ProductDetail', {
            productData: item,
          })
        }
        style={({pressed}) => [pressed && styles.press_background]}>
        <View style={styles.product_content}>
          <Image source={{uri: photo}} style={styles.img} />
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.pcs}>{item.quantity}</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={handlePress}
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
    paddingTop: 16,
    borderRadius: 5,
    width: 165,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 3,
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
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#000',
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
  },
  product_content: {
    display: 'flex',
    alignItems: 'center',
  },
  add_to_cart_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#010101',
    marginTop: 2.5,
  },
  cart_icon: {},
});

export default ProductCard;
