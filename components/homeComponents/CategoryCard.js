import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import CategoryCardDetail from './CategoryCardDetail';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CategoryItems', {selectedCategory: item})
      }
      style={({pressed}) => [
        styles.category_card,
        pressed && styles.press_background,
      ]}>
      <CategoryCardDetail item={item} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category_card: {
    alignItems: 'center',
    width: 115,
    height: 130,
    paddingHorizontal: 27,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 3,
  },
  press_background: {
    backgroundColor: '#d0f7d8',
  },
});

export default CategoryCard;
