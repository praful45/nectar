// /* eslint-disable react/no-unstable-nested-components */
// import React from 'react';
// import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Home from '../Home';
// import Account from '../Account';
// import Favourite from '../Favourite';
// import ShoppingCart from '../ShoppingCart';

// const TabApp = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#53B175',
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <AntDesign
//               name="home"
//               size={24}
//               color={focused ? '#53B175' : '#000'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <MaterialComIcon
//               name="account-circle-outline"
//               size={24}
//               color={focused ? '#53B175' : '#000'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favourite"
//         component={Favourite}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <MaterialIcon
//               name="favorite-border"
//               size={24}
//               color={focused ? '#53B175' : '#000'}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={ShoppingCart}
//         options={{
//           headerShown: true,
//           tabBarIcon: ({focused}) => (
//             <MaterialComIcon
//               name="shopping-outline"
//               size={24}
//               color={focused ? '#53B175' : '#000'}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabApp;
