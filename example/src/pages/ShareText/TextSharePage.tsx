import React from 'react';
import {Alert} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import {ShareTypes, ShareView} from '../../../../src';
import TextContent from './TextContent';

export default function TextSharePage({navigation}: NavigationInjectedProps) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleShareType = (type: ShareTypes) => {
    return new Promise((resolve, _) => {
      Alert.alert('Share', `Shared successfully to ${type}`, [
        {
          onPress: resolve,
        },
      ]);
    });
  };

  const handleCaptureError = (message: string) => {
    Alert.alert(message);
  };

  return (
    <ShareView
      onBackPress={handleBack}
      onSharePress={handleShareType}
      onCaptureError={handleCaptureError}>
      <TextContent />
    </ShareView>
  );
}
