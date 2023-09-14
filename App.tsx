/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigation from './navigations';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
