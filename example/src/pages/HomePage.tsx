import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';

type Props = NavigationInjectedProps;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSeparator: {
    marginVertical: 10,
  },
  groupSeparator: {
    backgroundColor: '#efefef',
    height: 5,
    width: '100%',
    marginVertical: 20,
  },
});

export default class HomePage extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  openPage = (to: string) => () => this.props.navigation.navigate(to);

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.groupSeparator} />
        <Button title={'Open Text Page'} onPress={this.openPage('TextPage')} />
        <View style={styles.buttonSeparator} />
        <Button
          title={'Open Text Share Page'}
          onPress={this.openPage('TextSharePage')}
        />
        <View style={styles.groupSeparator} />
        <Button
          title={'Open WebView Page'}
          onPress={this.openPage('WebViewPage')}
        />
        <View style={styles.buttonSeparator} />
        <Button
          title={'Open WebView Share Page'}
          onPress={this.openPage('WebViewSharePage')}
        />
        <View style={styles.groupSeparator} />
        <Button
          title={'Custom Share Bar (TODO)'}
          onPress={this.openPage('CustomShareBarPage')}
          disabled
        />
        <View style={styles.groupSeparator} />
      </View>
    );
  }
}
