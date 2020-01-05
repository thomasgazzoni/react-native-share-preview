import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import TextContent from './TextContent';

const styles = StyleSheet.create({
  actionButton: {
    padding: 10,
  },
});

export default function TextPage() {
  return (
    <View>
      <TextContent />
    </View>
  );
}

TextPage.navigationOptions = ({navigation}: NavigationInjectedProps) => ({
  title: 'Article',
  headerRight: (
    <TouchableOpacity
      style={styles.actionButton}
      onPress={() => navigation.navigate('TextSharePage')}>
      <Text>Share</Text>
    </TouchableOpacity>
  ),
});
