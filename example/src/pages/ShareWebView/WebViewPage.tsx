import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import WebViewContent from './WebViewContent';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  actionButton: {
    padding: 10,
  },
});

export default function WebViewPage() {
  return (
    <View style={styles.content}>
      <WebViewContent url="https://en.wikipedia.org/wiki/SpaceX" />
    </View>
  );
}

WebViewPage.navigationOptions = ({navigation}: NavigationInjectedProps) => ({
  title: 'SpaceX',
  headerRight: (
    <TouchableOpacity
      style={styles.actionButton}
      onPress={() => navigation.navigate('WebViewSharePage')}>
      <Text>Share</Text>
    </TouchableOpacity>
  ),
});
