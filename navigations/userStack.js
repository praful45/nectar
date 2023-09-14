/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../components/accountComponents/About';
import MyOrder from '../components/accountComponents/MyOrder';
import TrackOrder from '../screens/TrackOrder';
import MyFavorite from '../components/accountComponents/MyFavorite';
import MyAddress from '../components/accountComponents/MyAddress';
import AddAddress from '../components/accountComponents/AddAddress';
import CreditCard from '../components/accountComponents/CreditCard';
import AddCreditCard from '../components/accountComponents/AddCreditCard';
import Transaction from '../components/accountComponents/Transaction';
import Notification from '../components/accountComponents/Notification';
import Product from '../screens/Product';
import ProductDetail from '../components/homeComponents/ProductDetail';
import Review from '../screens/Review';
import WriteReview from '../components/reviewComponents/WriteReview';
import Category from '../screens/Category';
import CategoryItem from '../screens/CategoryItem';
import ShoppingCart from '../screens/ShoppingCart';
import ShippingMethod from '../screens/ShippingMethod';
import ShippingAddress from '../screens/ShippingAddress';
import PaymentMethod from '../screens/PaymentMethod';
import OrderSuccess from '../screens/OrderSuccess';
import Search from '../screens/Search';
import ApplyFilter from '../screens/ApplyFilter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {
  getCartItemsNumber,
  getFavoriteItemsNumber,
} from '../components/slices/appSlice';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Favourite from '../screens/Favourite';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="TabApp" component={TabApp} />
        {/* Account Screens */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: true,
            title: 'About Me',
          }}
        />
        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{
            headerShown: true,
            title: 'My Orders',
          }}
        />
        <Stack.Screen
          name="TrackOrder"
          component={TrackOrder}
          options={{
            headerShown: true,
            title: 'Track Order',
          }}
        />
        <Stack.Screen
          name="MyFavorite"
          component={MyFavorite}
          options={{
            headerShown: true,
            title: 'Favorites',
          }}
        />
        <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={({navigation}) => ({
            headerShown: true,
            title: 'My Address',

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddAddress')}>
                <AntDesign
                  name="pluscircleo"
                  size={20}
                  color="#000"
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={() => ({
            headerShown: true,
            title: 'Add Address',
          })}
        />
        <Stack.Screen
          name="CreditCard"
          component={CreditCard}
          options={({navigation}) => ({
            headerShown: true,
            title: 'My Cards',

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddCreditCard')}>
                <AntDesign
                  name="pluscircleo"
                  size={20}
                  color="#000"
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddCreditCard"
          component={AddCreditCard}
          options={() => ({
            headerShown: true,
            title: 'Add Credit Card',
          })}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: true,
            title: 'Transactions',
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: true,
            title: 'Notifications',
          }}
        />
        {/* Product Related Screens */}
        <Stack.Screen
          name="ProductList"
          component={Product}
          options={{
            headerShown: true,
            title: 'Products List',
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: true,
            title: 'Detail',

            headerTransparent: true,
            headerTitle: '',
            headerTintColor: '#000',
          }}
        />

        <Stack.Screen
          name="Review"
          component={Review}
          options={({navigation}) => ({
            headerShown: true,
            title: 'Reviews',

            headerTitle: 'Reviews',
            headerTintColor: '#000',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('WriteReview')}>
                <AntDesign name="pluscircleo" size={20} color="#000" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="WriteReview"
          component={WriteReview}
          options={() => ({
            headerShown: true,

            headerTitle: 'Write Reviews',
            headerTintColor: '#000',
          })}
        />

        <Stack.Screen
          name="Categories"
          component={Category}
          options={{
            headerShown: true,
            title: 'Categories',
          }}
        />
        <Stack.Screen
          name="CategoryItems"
          component={CategoryItem}
          options={{
            headerShown: true,
            title: 'CategoryItems',
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerShown: true,
            title: 'Shopping Cart',
          }}
        />
        {/* shipping and payment screens */}
        <Stack.Screen
          name="ShippingMethod"
          component={ShippingMethod}
          options={{
            headerShown: true,
            title: 'Shipping Method',
          }}
        />
        <Stack.Screen
          name="ShippingAddress"
          component={ShippingAddress}
          options={{
            headerShown: true,
            title: 'Shipping Address',
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{
            headerShown: true,
            title: 'Payment Method',
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={{
            headerShown: true,
            title: 'Order Success',
          }}
        />
        {/* search & filter screens */}
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search',
          }}
        />
        <Stack.Screen
          name="ApplyFilter"
          component={ApplyFilter}
          options={{
            headerShown: true,
            title: 'Apply Filters',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabApp = () => {
  const Tab = createBottomTabNavigator();
  const CartItemsNumber = useSelector(getCartItemsNumber);
  const FavoriteItemsNumber = useSelector(getFavoriteItemsNumber);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#53B175',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? '#53B175' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialComIcon
              name="account-circle-outline"
              size={24}
              color={focused ? '#53B175' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="favorite-border"
              size={24}
              color={focused ? '#53B175' : '#000'}
            />
          ),
          tabBarBadge: FavoriteItemsNumber,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <MaterialComIcon
              name="shopping-outline"
              size={24}
              color={focused ? '#53B175' : '#000'}
            />
          ),
          tabBarBadge: CartItemsNumber,
        }}
      />
    </Tab.Navigator>
  );
};
