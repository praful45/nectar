import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ProductCard from '../components/homeComponents/ProductCard';

const Product = ({route}) => {
  const productData = route.params.productData;
  const [data, setData] = useState(productData);
  return (
    <View style={styles.product_list}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={productItem => <ProductCard item={productItem.item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  product_list: {
    alignItems: 'center',
    flex: 1,
  },
});
export default Product;
