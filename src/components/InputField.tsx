import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

function InputField({
  secureTextEntry,
  ...props
}: TextInputProps): JSX.Element {
  const [isFocused, setFocus] = useState(false);
  const [isSecurityMode, setSecurityMode] = useState(secureTextEntry);

  const EyeOpenedIcon = require('../assets/view.png');
  const EyeClosedIcon = require('../assets/hide.png');

  return (
    <>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isSecurityMode}
        style={isFocused ? styles.inputBoxOnFocus : styles.inputBox}
        {...props}
      />
      {secureTextEntry ? (
        <View style={styles.inputView}>
          <Pressable
            style={styles.pressableEye}
            onPress={() => setSecurityMode(!isSecurityMode)}
            hitSlop={{ top: 20, bottom: 20 }}>
            <Image
              style={styles.eyeImg}
              source={isSecurityMode ? EyeOpenedIcon : EyeClosedIcon}
            />
          </Pressable>
        </View>
      ) : null}
    </>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputBox: {
    width: 318,
    height: 51,
    borderRadius: 8,
    backgroundColor: '#ffffff1e',
    color: '#FFF',
    paddingHorizontal: 16,
  },
  inputBoxOnFocus: {
    width: 318,
    height: 51,
    borderRadius: 8,
    backgroundColor: '#ffffff1e',
    borderColor: '#3768E5',
    borderWidth: 1,
    color: '#FFF',
    paddingHorizontal: 16,
  },
  inputView: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    top: 10,
    bottom: 0,
  },
  pressableEye: {
    width: 30,
    height: 30,
  },
  eyeImg: {
    width: 20,
    height: 20,
    tintColor: '#9F9F9F',
  },
});
