import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ShareTypes} from './constants';
import ShareBarItem from './ShareBarItem';

const styles = StyleSheet.create({
  viewContainer: {
    height: 140,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#ffffff',
  },
  viewShare: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnCancel: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps {
  onCancel: () => void;
  onShared: (type: ShareTypes) => void;
}

export default function ShareBar({onCancel, onShared}: IProps) {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewShare}>
        {Object.values(ShareTypes).map(type => (
          <ShareBarItem key={type} type={type} onPress={onShared} />
        ))}
      </View>
      <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
