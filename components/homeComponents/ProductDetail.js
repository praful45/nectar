import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Alert} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontA6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import AppButtonIcon from '../buttonComponents/AppButtonIcon';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, addToFavorite} from '../slices/appSlice';

const ProductDetail = ({route}) => {
  const {
    name,
    price,
    quantity,
    stars_rating,
    description,
    review_number,
    photo,
  } = route.params.productData;
  const navigation = useNavigation();

  const carts = useSelector(state => state.appItems.carts);
  const dispatch = useDispatch();

  const [selectQty, setSelectQty] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  //increase decrease quantity
  const handleIncrease = () => {
    setSelectQty(prev => prev + 1);
  };
  const handleDecrease = () => {
    if (selectQty === 1) {
      return;
    } else {
      setSelectQty(prev => prev - 1);
    }
  };
  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorite({name, price, quantity, selectQty}));
    }
    setIsFavorite(prev => !prev);
  };

  const handlePress = () => {
    dispatch(addToCart({name, price, quantity, selectQty}));
    Alert.alert('Success', 'Successfully added to cart!');
  };
  return (
    <View style={styles.item_detail_main}>
      <View style={styles.item_detail_img_bg}>
        <View>
          <Image source={{uri: photo}} style={styles.item_detail_img} />
        </View>
      </View>

      <View style={styles.item_detail_info}>
        <View style={styles.item_detail_price_love}>
          <Text style={styles.item_detail_price}>${price}</Text>
          <Pressable onPress={handleFavorite}>
            {isFavorite ? (
              <MaterialIcon
                name="favorite"
                size={24}
                color="red"
                marginRight={5}
              />
            ) : (
              <MaterialIcon
                name="favorite-border"
                size={24}
                color="#868889"
                marginRight={5}
              />
            )}
          </Pressable>
        </View>
        <Text style={styles.item_detail_title}>{name}</Text>
        <Text style={styles.item_detail_quantity}>{quantity}</Text>
        <Pressable
          onPress={() => navigation.navigate('Review')}
          style={styles.item_detail_rating_section}>
          <Text style={styles.item_detail_rating_point}>{stars_rating}</Text>
          <Rating
            ratingCount={5}
            fractions={1}
            jumpValue={0.5}
            startingValue={stars_rating}
            imageSize={14}
            type="custom"
            ratingBackgroundColor="#868889"
            tintColor="#F4F5F9"
            ratingColor="#FFC107"
            readonly
          />
          {/* <Text>Star</Text> */}
          <Text style={styles.item_detail_rating_reviews}>
            ({review_number} reviews)
          </Text>
        </Pressable>
        <Text style={styles.item_detail_description}>{description}</Text>
        <View style={styles.btn_bottom}>
          <View style={styles.item_detail_quantity_section}>
            <Text style={styles.item_detail_quantity_txt}>Quantity</Text>
            <View style={styles.item_detail_quantity_incr_decr_display}>
              <Pressable onPress={handleDecrease} style={styles.incr_decr}>
                <FontA6 name="minus" color="#6CC51D" size={16} />
              </Pressable>
              <Text style={styles.favorite_card_incr_decr_txt}>
                {selectQty}
              </Text>
              <Pressable onPress={handleIncrease} style={styles.incr_decr}>
                <FontA6 name="plus" color="#6CC51D" size={16} />
              </Pressable>
            </View>
          </View>
          <AppButtonIcon
            onPress={handlePress}
            btnText="Add to Cart"
            iconName="shopping-outline"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item_detail_main: {
    // paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  item_detail_img_bg: {
    // borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#F2FFE6',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    transform: [{translateY: -10}],
  },
  item_detail_img: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    borderColor: 'black',
  },
  item_detail_info: {
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 16,
    height: '100%',
    paddingTop: 26,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  item_detail_price_love: {
    display: 'flex',
    flexDirection: 'row',
  },
  item_detail_price: {
    color: '#28B446',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  item_detail_title: {
    color: '#000',
    fontSize: 20,
    marginVertical: 5,
    fontFamily: 'Poppins-Bold',
  },
  item_detail_quantity: {
    color: '#868889',
    fontSize: 12,
    marginBottom: 8,
  },
  item_detail_rating_section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    marginBottom: 16,
  },
  item_detail_rating_point: {
    color: '#000',
    fontWeight: '500',
    fontSize: 12,
  },
  item_detail_rating_reviews: {
    color: '#868889',
    fontSize: 12,
  },
  item_detail_description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#868889',
  },
  item_detail_quantity_section: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 17,
    marginTop: 8,
  },
  item_detail_quantity_txt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#868889',
    flex: 1,
  },
  favorite_card_incr_decr_txt: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#EBEBEB',
    paddingHorizontal: 19,
    paddingVertical: 16,
  },
  item_detail_quantity_incr_decr_display: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  btn: {
    backgroundColor: '#AEDC81',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 18,
    marginTop: 13,
  },
  btn_txt: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    flex: 1,
    marginLeft: '37%',
  },
  btn_flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn_bottom: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    marginTop: 250,
  },
  incr_decr: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default ProductDetail;
