import React from 'react';
import {View, StyleSheet} from 'react-native';

const CustomStepIndicator = ({
  stepCount,
  currentPosition,
  indicatorSize,
  unfinishedColor,
  currentColor,
  finishedColor,
  finishedLineColor,
  unfinishedLineColor,
  connectorWidth,
  connectorHeight,
}) => {
  const renderSteps = () => {
    const steps = [];

    for (let i = 0; i < stepCount; i++) {
      const isCurrentStep = i === currentPosition;
      const isFinishedStep = i < currentPosition;

      const backgroundColor = isCurrentStep
        ? currentColor
        : isFinishedStep
        ? finishedColor
        : unfinishedColor;

      const lineColor = isFinishedStep
        ? finishedLineColor
        : unfinishedLineColor;

      const stepStyle = [
        styles.step,
        {
          width: indicatorSize,
          height: indicatorSize,
          borderRadius: indicatorSize / 2,
          backgroundColor,
        },
      ];

      steps.push(
        <View key={i}>
          <View style={stepStyle} />
          {i < stepCount - 1 && (
            <View
              style={[
                styles.connector,
                {
                  backgroundColor: lineColor,
                  width: connectorWidth,
                  height: connectorHeight,
                },
              ]}
            />
          )}
        </View>,
      );
    }

    return steps;
  };

  return <View style={styles.container}>{renderSteps()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'horizontal',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  step: {
    marginHorizontal: 4,
  },
  connector: {
    alignSelf: 'center',
  },
});

export default CustomStepIndicator;
