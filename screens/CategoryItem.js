import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import ProductCard from '../components/homeComponents/ProductCard';
import axios from 'axios';
import Loading from '../components/Loading/Loading';

const CategoryItem = ({route}) => {
  const categoryId = route.params.selectedCategory.id;
  const [data, setData] = useState();
  const [viewData, setViewData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const filterProduct = filterData => {
    let tempViewData = [...filterData];
    tempViewData = tempViewData.filter(x => x.category_id === categoryId);
    setViewData(tempViewData);
  };

  useEffect(() => {
    axios
      .get('https://praful45.github.io/jsonapi/data.json')
      .then(function (response) {
        setData(response.data);

        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    if (data) {
      filterProduct(data.products);
    }
  }, [data, categoryId]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.product_list}>
      <FlatList
        data={viewData}
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

export default CategoryItem;
