import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import CategoryCardDetail from './CategoryCardDetail';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('CategoryItems')}
      style={({pressed}) => [
        styles.category_card,
        pressed && styles.press_background,
      ]}>
      <CategoryCardDetail />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category_card: {
    // borderWidth: 0.5,
    alignItems: 'center',
    width: 110,
    height: 110,
    paddingHorizontal: 27,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  press_background: {
    backgroundColor: '#d0f7d8',
  },
});

export default CategoryCard;
