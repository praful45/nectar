import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconFA from 'react-native-vector-icons/FontAwesome';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import CategoryCardDetail from '../components/homeComponents/CategoryCardDetail';
import ProductCard from '../components/homeComponents/ProductCard';
import {FilterIcon} from '../components/svgComponents/SvgComponent';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import BannerSlider from '../components/homeComponents/BannerSlider';

const Home = () => {
  const navigation = useNavigation();
  const [appData, setAppData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://praful45.github.io/jsonapi/data.json')
      .then(function (response) {
        setAppData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.activity_indicator}>
        <Loading />
      </View>
    );
  }

  const renderCategory = ({item}) => {
    return <CategoryCardDetail item={item} />;
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.bg}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <View>
          <Pressable
            onPress={() =>
              navigation.navigate('Search', {
                searchData: appData,
              })
            }>
            <View style={styles.search}>
              <IconFA name="search" style={styles.searchIcon} size={18} />
              <Text style={styles.greyTextColor} placeholderTextColor="#7c7c7c">
                Search Products
              </Text>

              <View style={styles.filterIcon}>
                <FilterIcon width={17} height={15} color="#868889" />
              </View>
            </View>
          </Pressable>
          <View>
            <BannerSlider />
          </View>
        </View>
        {/*Categories Section */}
        <View style={styles.lists}>
          <View style={styles.listTopSection}>
            <Text style={styles.listTopFirst}>Categories</Text>
            <Pressable
              onPress={() =>
                navigation.navigate('Categories', {
                  categoryData: appData.categories,
                })
              }
              style={({pressed}) => (pressed ? styles.press_background : null)}>
              <MaterialComIcon
                name="greater-than"
                color={'#868889'}
                size={18}
              />
            </Pressable>
          </View>
          <FlatList
            horizontal
            data={appData.categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.home_category}
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Featured Products Section */}
        <View style={styles.lists}>
          <View style={styles.listTopSection}>
            <Text style={[styles.blackTxtColor, styles.listTopFirst]}>
              Featured Products
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate('ProductList', {
                  productData: appData.products,
                })
              }
              style={({pressed}) => (pressed ? styles.press_background : null)}>
              <MaterialComIcon
                name="greater-than"
                color={'#868889'}
                size={18}
              />
            </Pressable>
          </View>

          <View style={styles.column}>
            {appData.products.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoTxt: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 8,
  },
  bg: {
    backgroundColor: '#F4F5F9',
    paddingHorizontal: 17,
    paddingTop: 14,
  },
  lists: {
    marginBottom: 15,
    marginTop: 15,
  },
  carousel: {
    marginBottom: 20,
    width: '100%',
    height: 283,
    borderRadius: 8,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  locationTxt: {
    color: '#4c4f4d',
  },
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
  greyTextColor: {
    color: '#7c7c7c',
    flex: 1,
  },
  blackTxtColor: {
    color: '#181725',
    fontFamily: 'Gilroy-Light',
    fontWeight: '700',
  },
  seeAllTxt: {
    color: '#53B175',
    fontFamily: 'Gilroy-Light',
    fontWeight: '700',
  },
  listTopSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },
  listTopFirst: {
    flex: 1,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
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
  press_background: {
    backgroundColor: '#d0f7d8',
    borderRadius: 10,
  },
  home_category: {
    display: 'flex',
    gap: 20,
  },
  column: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  activity_indicator: {
    flex: 1,
  },
});

export default Home;
