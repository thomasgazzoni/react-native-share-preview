import React from 'react';
import Navigator from './src/Navigator';
import {SafeAreaView} from 'react-navigation';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Navigator />
    </SafeAreaView>
  );
}
