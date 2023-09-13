import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import {
  OnBoarding1,
  OnBoarding2,
  OnBoarding3,
} from '../components/svgComponents/SvgComponent';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <OnboardingSwiper
      onSkip={() => navigation.replace('AuthOption')}
      onDone={() => navigation.replace('TabApp')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <OnBoarding1 />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <OnBoarding2 />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <OnBoarding3 />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default Onboarding;
