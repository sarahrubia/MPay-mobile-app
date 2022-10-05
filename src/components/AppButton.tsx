import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type AppButtonProps = {
  title: string;
  onPress?: any;
};

function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 318,
    height: 63,
    borderRadius: 8,
    backgroundColor: '#1C5BB9',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
