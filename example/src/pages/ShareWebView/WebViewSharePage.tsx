import React from 'react';
import {Alert} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import {ShareTypes, ShareView} from '../../../../src';
import WebViewContent from './WebViewContent';

export default function WebViewSharePage({
  navigation,
}: NavigationInjectedProps) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleShareType = (type: ShareTypes) => {
    return new Promise((resolve, _) => {
      Alert.alert('Share', `TODO: use native share for ${type}`, [
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
      <WebViewContent url="https://en.wikipedia.org/wiki/SpaceX" />
    </ShareView>
  );
}
