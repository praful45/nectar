import React from 'react';
import {StyleSheet, View} from 'react-native';
import NotificationCard from '../cards/NotificationCard';

const Notification = () => {
  return (
    <View style={styles.notification_wrapper}>
      <NotificationCard title="Allow Notifcations" />
      <NotificationCard title="Email Notifcations" />
      <NotificationCard title="Order Notifcations" />
      <NotificationCard title="General Notifcations" />
    </View>
  );
};

const styles = StyleSheet.create({
  notification_wrapper: {
    paddingHorizontal: 17,
    paddingTop: 32,
    gap: 12,
  },
});

export default Notification;
