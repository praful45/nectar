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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboard" component={Onboarding} />
        <Stack.Screen name="TabApp" component={TabApp} />
        {/* Account Screens */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: true,
            title: 'About Me',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{
            headerShown: true,
            title: 'My Orders',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MyFavorite"
          component={MyFavorite}
          options={{
            headerShown: true,
            title: 'Favorites',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{
            headerShown: true,
            title: 'My Address',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CreditCard"
          component={CreditCard}
          options={{
            headerShown: true,
            title: 'Credit Cards',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: true,
            title: 'Transactions',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: true,
            title: 'Notifications',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        {/* Product Related Screens */}
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: true,
            title: 'Detail',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: '#000',
          }}
        />

        <Stack.Screen
          name="Review"
          component={Review}
          options={{
            headerShown: true,
            title: 'Reviews',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
            headerTitle: 'Reviews',
            headerTintColor: '#000',
          }}
        />

        <Stack.Screen
          name="Categories"
          component={Category}
          options={{
            headerShown: true,
            title: 'Categories',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CategoryItems"
          component={CategoryItem}
          options={{
            headerShown: true,
            title: 'CategoryItems',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerShown: true,
            title: 'Shopping Cart',
            headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
