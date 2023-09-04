import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ItemCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('ProductDetail')}
      // onPress={() => navigation.navigate('Categories')}
      style={({pressed}) => [styles.card, pressed && styles.press_background]}>
      <View>
        <Image source={require('../../assets/apple.png')} style={styles.img} />
        <Text style={styles.title}>Red Apple</Text>
        <Text style={styles.pcs}>7pcs, Priceg</Text>
        <View style={styles.cardBottom}>
          <Text style={styles.price}>$4.99</Text>
          <Icon name="plussquare" style={styles.addBtn} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 18,
    marginRight: 15,
    borderColor: '#E2E2E2',
  },
  press_background: {
    backgroundColor: '#d0f7d8',
    borderRadius: 10,
  },
  pcs: {
    color: '#7c7c7c',
    marginBottom: 16,
  },
  img: {
    marginTop: 16,
  },
  title: {
    fontFamily: 'Gilroy-Light',
    fontWeight: '700',
    color: '#181725',
    marginTop: 18,
  },
  addBtn: {
    color: '#53B175',
    fontSize: 32,
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    flex: 1,
    fontSize: 16,
    color: '#181725',
  },
});

export default ItemCard;
