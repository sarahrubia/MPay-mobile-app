import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FunctionComponent } from 'react';

interface buttonText {
  title: string;
};

const AppButton: FunctionComponent<buttonText> = ({ title }) => {
  return (
    <View style={styles.btnWrapper}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36,
  },
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
