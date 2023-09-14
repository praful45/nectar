import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../globalStyles/globalStyles';

const Loading = () => {
  return (
    <View style={[styles.activity_indicator, globalStyles.background]}>
      <ActivityIndicator size="large" color="#6CC51D" />
    </View>
  );
};

const styles = StyleSheet.create({
  activity_indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
