import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import gStyles from '../components/globalStyles/globalStyles';
import {Image} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {authentication} from '../FirebaseConfig';
import {useAuth} from '../hooks/useAuth';
import {profile} from '../components/images';

const Account = () => {
  const navigation = useNavigation();
  const {user} = useAuth();

  const handleSignOut = () => {
    Alert.alert('Sure?', 'Are you sure to signout', [
      {
        text: 'Yes',
        onPress: () => signOut(authentication),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  };
  return (
    <View style={[gStyles.background, styles.back]}>
      <View style={styles.top_section}>
        <View style={styles.profile_info}>
          <Image
            source={profile}
            style={styles.profile}
            width={20}
            height={20}
          />
          <Text style={[gStyles.textColor, styles.name]}>
            {user?.displayName || 'Olivia Justin'}
          </Text>
          <Text style={(gStyles.textColor, styles.email)}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.miscs}>
        <Pressable
          onPress={() => navigation.navigate('About')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <MaterialComIcon
              name="account-circle-outline"
              color={'#28B446'}
              size={18}
            />
            <Text style={styles.misc_text}>About me</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MyOrder')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <Feather name="box" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>My Orders</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MyFavorite')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <MaterialComIcon name="heart-outline" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>My Favorites</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MyAddress')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <Feather name="map-pin" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>My Address</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('CreditCard')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <FontAwesome name="credit-card" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>Credit Cards</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Transaction')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <FontAwesome name="dollar" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>Transactions</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Notification')}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <Ionicon name="notifications-outline" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>Notifications</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
        <Pressable
          onPress={handleSignOut}
          style={({pressed}) => (pressed ? styles.press_background : null)}>
          <View style={styles.misc_bar}>
            <AntDesign name="logout" color={'#28B446'} size={18} />
            <Text style={styles.misc_text}>Sign out</Text>
            <MaterialComIcon name="greater-than" color={'#868889'} size={18} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  press_background: {
    backgroundColor: '#d0f7d8',
    borderRadius: 10,
  },
  misc_bar: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 13,
    marginTop: 13,
  },
  miscs: {
    marginTop: '40%',
    paddingHorizontal: 36,
  },
  misc_text: {
    color: '#000',
    fontWeight: '700',
    flex: 1,
    marginLeft: 15,
  },
  back: {
    flex: 1,
  },
  top_section: {
    backgroundColor: '#fff',
    height: '15%',
    alignItems: 'center',
    position: 'relative',
  },
  profile_info: {
    position: 'absolute',
    marginTop: 40,
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
  },
  email: {
    color: '#868889',
    fontSize: 12,
  },
});

export default Account;
