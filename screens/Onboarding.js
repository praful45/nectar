import {useNavigation} from '@react-navigation/native';
import React from 'react';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import {
  OnBoarding1,
  OnBoarding2,
  OnBoarding3,
} from '../components/svgComponents/SvgComponent';
import {useDispatch} from 'react-redux';
import {changeIsFirstTime} from '../components/slices/appSlice';

const Onboarding = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSkip = () => {
    dispatch(changeIsFirstTime());
    navigation.replace('AuthOption');
  };
  const handleDone = () => {
    dispatch(changeIsFirstTime());
    navigation.replace('AuthOption');
  };

  return (
    <OnboardingSwiper
      onSkip={handleSkip}
      onDone={handleDone}
      pages={[
        {
          backgroundColor: '#fff',
          image: <OnBoarding1 />,
          title: 'Buy Grocery',
          subtitle: 'Effortless grocery shopping awaits you',
        },
        {
          backgroundColor: '#fff',
          image: <OnBoarding2 />,
          title: 'Save Time',
          subtitle: 'Save your time buying online',
        },
        {
          backgroundColor: '#fff',
          image: <OnBoarding3 />,
          title: 'Enjoy Quality Food',
          subtitle:
            'Enhance your dining experience with delicious and delightful flavors',
        },
      ]}
    />
  );
};

export default Onboarding;
