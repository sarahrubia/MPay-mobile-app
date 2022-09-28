import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';

interface buttonText {
  title: string;
  screenName?: string;
};

const AppButton: FunctionComponent<buttonText> = ({ title, screenName }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.btnWrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenName)}
        style={styles.btn}>
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
    marginBottom: 16,
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
