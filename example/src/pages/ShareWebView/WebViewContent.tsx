import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function WebViewContent({url}: {url: string}) {
  return (
    <WebView
      style={styles.content}
      cacheEnabled
      automaticallyAdjustContentInsets={false}
      source={{uri: url}}
      javaScriptEnabled
      domStorageEnabled
    />
  );
}
