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
  placeholder,
  placeholderTextColor,
  secureTextEntry,
}: TextInputProps): JSX.Element {
  const [isFocused, setFocus] = useState(false);
  const [isSecurityMode, setSecurityMode] = useState(false);

  const EyeOpenedIcon = require('../assets/view.png');
  const EyeClosedIcon = require('../assets/hide.png');

  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isSecurityMode}
        style={isFocused ? styles.inputBoxOnFocus : styles.inputBox}
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
