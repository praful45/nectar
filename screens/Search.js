import {FlatList, StyleSheet, View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/homeComponents/SearchBar';
import globalStyles from '../components/globalStyles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import filter from 'lodash.filter';

const Search = ({route}) => {
  const searchData = route.params.searchData.products;
  const [data, setData] = useState(searchData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    let updatedList = [...searchData];
    updatedList = updatedList.filter(item => {
      return item.name.toLowerCase().indexOf(formattedQuery) !== -1;
    });
    setData(updatedList);
  };

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('ProductDetail', {
            productData: item,
          })
        }>
        <View style={styles.render_view}>
          <Image source={{uri: item.photo}} style={styles.img} />
          <View style={styles.render_info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.quantity}>{item.quantity}</Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={[styles.search_wrapper, globalStyles.background]}>
      <SearchBar handleSearch={handleSearch} query={searchQuery} />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search_wrapper: {paddingHorizontal: 17, paddingTop: 14, height: '100%'},
  render_view: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    gap: 10,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 15,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 12,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    color: 'green',
    fontSize: 15,
  },
  quantity: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 12,
  },
  img: {
    width: 130,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Search;
