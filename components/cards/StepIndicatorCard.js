import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Entypo from 'react-native-vector-icons/Entypo';

const StepIndicatorCard = ({pos}) => {
  // const [currentPosition, setCurrentPosition] = useState(pos);
  const currentPosition = pos;
  const renderStepIndicator = ({position, stepStatus}) => {
    if (stepStatus === 'finished') {
      return <Entypo name="check" size={16} color="#fff" />;
    } else if (stepStatus === 'current') {
      return <Text style={{color: '#fff'}}>{position + 1}</Text>;
    } else {
      return <Text style={{color: '#868889'}}>{position + 1}</Text>;
    }
  };

  const labels = ['DELIVERY', 'ADDRESS', 'PAYMENT'];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: '#6CC51D',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#6CC51D',
    stepStrokeUnFinishedColor: '#EBEBEB',
    //
    separatorFinishedColor: '#6CC51D', //connecting lines
    separatorUnFinishedColor: '#E8E9E9',
    //
    stepIndicatorFinishedColor: '#6CC51D',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#6CC51D',
    //
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#868889',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#868889',
    labelColor: '#999999',
    labelSize: 10,
    currentStepLabelColor: '#6CC51D',
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.step_indicator}>
        <StepIndicator
          customStyles={customStyles}
          labels={labels}
          stepCount={3}
          currentPosition={currentPosition}
          renderStepIndicator={renderStepIndicator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
  },
});

export default StepIndicatorCard;
