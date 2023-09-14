import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3iZ6yKqoEteCGK0uC96VTTrgug2jTB7k',
  authDomain: 'nectar-194d8.firebaseapp.com',
  projectId: 'nectar-194d8',
  storageBucket: 'nectar-194d8.appspot.com',
  messagingSenderId: '8856164223',
  appId: '1:8856164223:web:ae723afdf224edcf4e6c4a',
};

const app = initializeApp(firebaseConfig);
export const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// setPersistence(authentication, browserLocalPersistence)
//   .then(() => {
//     // Firebase Authentication will persist the user's session across app restarts and browser sessions.
//     // can use 'authentication' for authentication operations in the app.
//   })
//   .catch(error => {
//     // errors related to persistence setting
//     console.error('Error setting persistence:', error);
//   });
