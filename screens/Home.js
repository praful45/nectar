import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFA from 'react-native-vector-icons/FontAwesome';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import CategoryCardDetail from '../components/homeComponents/CategoryCardDetail';
import ProductCard from '../components/homeComponents/ProductCard';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import {FilterIcon} from '../components/svgComponents/SvgComponent';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={styles.bg}>
        <View>
          <View style={styles.search}>
            <IconFA name="search" style={styles.searchIcon} size={18} />
            <TextInput
              style={styles.greyTextColor}
              placeholder="Search Products"
              placeholderTextColor="#7c7c7c"
            />
            <Pressable
              onPress={() => navigation.navigate('ApplyFilter')}
              style={({pressed}) => (pressed ? styles.press_background : null)}>
              <View style={styles.filterIcon}>
                <FilterIcon width={17} height={15} color="#868889" />
              </View>
            </Pressable>
          </View>
          <Image
            source={require('../assets/carousel.png')}
            style={styles.carousel}
          />
        </View>
        {/*Categories Section */}
        <View style={styles.lists}>
          <View style={styles.listTopSection}>
            <Text style={styles.listTopFirst}>Categories</Text>
            <Pressable
              onPress={() => navigation.navigate('Categories')}
              style={({pressed}) => (pressed ? styles.press_background : null)}>
              <MaterialComIcon
                name="greater-than"
                color={'#868889'}
                size={18}
              />
            </Pressable>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.home_category}>
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
            <CategoryCardDetail />
          </ScrollView>
        </View>
        {/* Featured Products Section */}
        <View style={styles.lists}>
          <View style={styles.listTopSection}>
            <Text style={[styles.blackTxtColor, styles.listTopFirst]}>
              Featured Products
            </Text>
            <Pressable
              onPress={() => navigation.navigate('Categories')}
              style={({pressed}) => (pressed ? styles.press_background : null)}>
              <MaterialComIcon
                name="greater-than"
                color={'#868889'}
                size={18}
              />
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={styles.product_list}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ScrollView>
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
    marginBottom: 30,
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
  product_list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
});

export default Home;
