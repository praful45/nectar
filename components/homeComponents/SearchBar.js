import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {FilterIcon} from '../svgComponents/SvgComponent';

const SearchBar = ({handleSearch, query}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.search}>
      <IconFA name="search" style={styles.searchIcon} size={18} />
      <TextInput
        style={styles.greyTextColor}
        placeholder="Search Products"
        placeholderTextColor="#7c7c7c"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={txt => handleSearch(txt)}
        value={query}
      />
      <Pressable
        onPress={() => navigation.navigate('ApplyFilter')}
        style={({pressed}) => (pressed ? styles.press_background : null)}>
        <View style={styles.filterIcon}>
          <FilterIcon width={17} height={15} color="#868889" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 20,
  },
  searchIcon: {
    color: '#868889',
    marginRight: 16,
  },
  filterIcon: {
    color: 'red',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  greyTextColor: {
    color: '#7c7c7c',
    flex: 1,
  },
  press_background: {
    backgroundColor: '#d0f7d8',
    borderRadius: 10,
  },
});

export default SearchBar;
