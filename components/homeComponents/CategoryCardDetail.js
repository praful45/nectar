import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const CategoryCardDetail = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('CategoryItems')}
      style={() => [styles.category_card_detail]}>
      <View style={styles.category_card_img_bg}>
        <Image
          source={require('../../assets/apple_category.png')}
          style={styles.category_card_img}
        />
      </View>
      <Text style={styles.category_card_txt}>Fruits</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category_card_detail: {
    display: 'flex',
    // borderWidth: 1,
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
    resizeMode: 'cover',
    // borderWidth: 1,
  },
  category_card_txt: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    marginTop: 9,
  },
});

export default CategoryCardDetail;
