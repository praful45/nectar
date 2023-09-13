/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from './screens/Onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './screens/Cart';
import Favourite from './screens/Favourite';
import Account from './screens/Account';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import About from './components/accountComponents/About';
import MyOrder from './components/accountComponents/MyOrder';
import MyFavorite from './components/accountComponents/MyFavorite';
import MyAddress from './components/accountComponents/MyAddress';
import CreditCard from './components/accountComponents/CreditCard';
import Transaction from './components/accountComponents/Transaction';
import Notification from './components/accountComponents/Notification';
import Category from './screens/Category';
import CategoryItem from './screens/CategoryItem';
import ProductDetail from './components/homeComponents/ProductDetail';
import ShoppingCart from './screens/ShoppingCart';
import Review from './screens/Review';
import {TouchableOpacity} from 'react-native';
import WriteReview from './components/reviewComponents/WriteReview';
import AddAddress from './components/accountComponents/AddAddress';
import ShippingMethod from './screens/ShippingMethod';
import ShippingAddress from './screens/ShippingAddress';
import PaymentMethod from './screens/PaymentMethod';
import OrderSuccess from './screens/OrderSuccess';
import AddCreditCard from './components/accountComponents/AddCreditCard';
import TrackOrder from './screens/TrackOrder';
import ApplyFilter from './screens/ApplyFilter';
import AuthOption from './screens/AuthScreens/AuthOption';
import AuthLogin from './screens/AuthScreens/AuthLogin';
import AuthSignUp from './screens/AuthScreens/AuthSignUp';
import ForgotPassword from './screens/AuthScreens/ForgotPassword';
import EnterNumber from './screens/AuthScreens/EnterNumber';
import VerifyNumber from './screens/AuthScreens/VerifyNumber';

const TabApp = () => {
  const Tab = createBottomTabNavigator();
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
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <MaterialComIcon
              name="shopping-outline"
              size={24}
              color={focused ? '#53B175' : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Onboard" component={Onboarding} />
        {/* Auth Screens */}
        <Stack.Screen name="AuthOption" component={AuthOption} />
        <Stack.Screen name="AuthLogin" component={AuthLogin} />
        <Stack.Screen name="AuthSignUp" component={AuthSignUp} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            title: 'Passwrod Recovery',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="EnterNumber"
          component={EnterNumber}
          options={{
            headerShown: true,
            title: 'Enter Number',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="VerifyNumber"
          component={VerifyNumber}
          options={{
            headerShown: true,
            title: 'Verify Number',
            headerTransparent: true,
          }}
        />
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
                <AntDesign name="pluscircleo" size={20} color="#000" />
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
                <AntDesign name="pluscircleo" size={20} color="#000" />
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

            animation: 'none',
          }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{
            headerShown: true,
            title: 'Payment Method',

            animation: 'none',
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
};

export default App;
