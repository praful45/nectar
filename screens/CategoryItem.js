import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ProductCard from '../components/homeComponents/ProductCard';

const CategoryItem = () => {
  return (
    <ScrollView contentContainerStyle={styles.product_list}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  product_list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    paddingVertical: 25,
    backgroundColor: '#F4F5F9',
  },
});

export default CategoryItem;
