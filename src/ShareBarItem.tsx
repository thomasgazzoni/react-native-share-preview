import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ShareTypes, ShareColors} from './constants';

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
  },
  viewContent: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconShare: {},
  textShare: {
    fontSize: 14,
    color: '#ffffff',
  },
});

interface IProps {
  type: ShareTypes;
  onPress: (type: ShareTypes) => void;
}

export default function ShareBarItem({type, onPress}: IProps) {
  const backgroundColor = ShareColors[type];

  const handlePress = () => {
    onPress(type);
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <View style={[styles.viewContent, {backgroundColor}]}>
        {/* <Icon name={iconName} size={40} color={color} /> */}
        <Text style={styles.textShare}>{`${type}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
