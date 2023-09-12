import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const NotificationCard = ({title, description}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.notification_card_wrapper}>
      <View style={styles.notification_card_setting}>
        <Text style={styles.notification_card_setting_title}>{title}</Text>
        <Text style={styles.notification_card_setting_description}>
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
          nonumym
        </Text>
      </View>
      {/* <Switch /> */}
      <View style={styles.notification_card_toogle}>
        <ToggleSwitch
          isOn={isEnabled}
          onColor="#6CC51D"
          offColor="#ecf0f1"
          size="small"
          onToggle={toggleSwitch}
          style={styles.toggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notification_card_wrapper: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 19,
    paddingHorizontal: 17,
    gap: 50,
    alignItems: 'center',
  },
  notification_card_setting: {
    // width: '80%',
    // flexBasis: 273,
    // borderWidth: 1,
    flex: 1,
  },
  notification_card_setting_title: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  notification_card_setting_description: {
    color: '#868889',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
  notification_card_toogle: {
    color: '#000',
    // borderWidth: 1,
  },
});

export default NotificationCard;
