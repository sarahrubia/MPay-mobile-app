import React, { useState } from 'react';
import {
  ColorValue,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

type InputFieldProps = {
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  secureTextEntry?: boolean | undefined;
};

function InputField({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
}: InputFieldProps): JSX.Element {
  const [isFocused, setFocus] = useState(false);
  const [isSecureTextEntry, setSecureTextEntry] = useState(false);

  const EyeOpenedIcon = require('../assets/view.png');
  const EyeClosedIcon = require('../assets/hide.png');

  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={isSecureTextEntry}
        style={isFocused ? styles.inputBoxOnFocus : styles.inputBox}
      />
      {secureTextEntry ? (
        <View style={styles.inputView}>
          <Pressable
            style={styles.pressableEye}
            onPress={() => setSecureTextEntry(!isSecureTextEntry)}
            hitSlop={{ top: 20, bottom: 20 }}>
            <Image
              style={styles.eyeImg}
              source={isSecureTextEntry ? EyeOpenedIcon : EyeClosedIcon}
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
