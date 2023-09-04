import React from 'react';
import {StyleSheet, View} from 'react-native';
import CategoryCard from '../components/homeComponents/CategoryCard';

const Category = () => {
  return (
    <View style={styles.category_main}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </View>
  );
};

const styles = StyleSheet.create({
  category_main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 21,
    backgroundColor: '#F4F5F9',
    flex: 1,
  },
});

export default Category;
