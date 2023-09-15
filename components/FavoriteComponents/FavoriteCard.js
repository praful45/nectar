import React from 'react';
import {Pressable, Image, View, Text, StyleSheet} from 'react-native';
import FontA6 from 'react-native-vector-icons/FontAwesome6';
import {useDispatch} from 'react-redux';
import {decreaseSelectQty, increaseSelectQty} from '../slices/appSlice';

const FavoriteCard = ({data}) => {
  const id = data.id;
  console.log(data);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    console.log('hello');
    let incr = data.selectQty + 1;
    dispatch(increaseSelectQty({incr, id}));
  };
  const handleDecrease = () => {
    if (data.selectQty <= 1) {
      return;
    }
    let decr = data.selectQty - 1;
    dispatch(decreaseSelectQty({decr, id}));
  };
  return (
    <View style={styles.favorite_card_main}>
      <Image
        source={{uri: data.photo}}
        style={styles.favorite_card_main_image}
      />
      <View style={styles.favorite_card_info}>
        <Text style={styles.favorite_card_price_qty_txt}>
          ${data.price} x {data.selectQty}
        </Text>
        <Text style={styles.favorite_card_item_name}>{data.name}</Text>
        <Text style={styles.favorite_card_amount_txt}>{data.quantity}</Text>
      </View>
      <View style={styles.favorite_card_incr_decr}>
        <Pressable onPress={handleIncrease}>
          <FontA6 name="plus" color="#6CC51D" size={12} />
        </Pressable>
        <Text style={styles.favorite_card_incr_decr_txt}>{data.selectQty}</Text>
        <Pressable onPress={handleDecrease}>
          <FontA6 name="minus" color="#6CC51D" size={12} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favorite_card_main: {
    backgroundColor: '#fff',
    // marginHorizontal: 17,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // marginVertical: 9,
  },
  favorite_card_info: {
    flex: 1,
    marginLeft: 22,
  },
  favorite_card_price_qty_txt: {
    color: '#6CC51D',
    fontSize: 12,
  },
  favorite_card_item_name: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },
  favorite_card_amount_txt: {
    color: '#868889',
    fontSize: 12,
  },
  favorite_card_incr_decr_txt: {
    color: '#868889',
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 12,
  },
  favorite_card_main_image: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },
  favorite_card_incr_decr: {
    marginRight: 8,
  },
});

export default FavoriteCard;
