import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

interface IProps {
  style?: StyleProp<ViewStyle>;
  onCancel?: () => void;
}

export default function Loading({
  children,
  style,
  onCancel,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={[styles.viewContainer, style]}>
        {children || <ActivityIndicator size="large" color="white" />}
      </View>
    </TouchableWithoutFeedback>
  );
}

Loading.defaultProps = {
  onCancel: undefined,
};
