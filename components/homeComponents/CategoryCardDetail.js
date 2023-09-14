import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const CategoryCardDetail = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CategoryItems', {selectedCategory: item})
      }
      style={() => [styles.category_card_detail]}>
      <View style={styles.category_card_img_bg}>
        <Image source={{uri: item.image}} style={styles.category_card_img} />
      </View>
      <Text style={styles.category_card_txt}>{item.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category_card_detail: {
    display: 'flex',
    alignItems: 'center',
  },
  category_card_img_bg: {
    backgroundColor: '#FFE9E5',
    borderRadius: 100,
    height: 66,
    width: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category_card_img: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
  category_card_txt: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    marginTop: 9,
  },
});

export default CategoryCardDetail;
