import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';

import AppButton from '../components/AppButton';

const Login = () => {
  const [isSecureTextEntry, setSecureTextEntry] = useState(true);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const EyeOpenedIcon = require('../assets/view.png');
  const EyeClosedIcon = require('../assets/hide.png');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            Entrar <Text style={styles.highlight}>M-PAY</Text>
          </Text>
        </View>
        <View>
          <View style={styles.marginView}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#9F9F9F"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={isEmailFocused ? styles.inputBoxOnFocus : styles.inputBox}
            />
          </View>
          <View style={styles.marginView}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#9F9F9F"
              secureTextEntry={isSecureTextEntry}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              style={
                isPasswordFocused ? styles.inputBoxOnFocus : styles.inputBox
              }
            />
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
          </View>
          <View style={styles.rememberPassword}>
            <CheckBox
              boxType="square"
              style={styles.checkbox}
              onFillColor={'#FFFFFF'}
              onTintColor={'#FFFFFF'}
            />
            <Text style={styles.smallText}>Lembrar-me</Text>
          </View>
        </View>
      </View>
      <AppButton title={'ENTRAR'} />
      <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  content: {
    marginTop: 200,
  },
  title: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 40,
  },
  highlight: {
    color: '#1C5BB9',
  },
  smallText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  inputView: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    top: 10,
    bottom: 0,
  },
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
  pressableEye: {
    width: 30,
    height: 30,
  },
  eyeImg: {
    width: 20,
    height: 20,
    tintColor: '#9F9F9F',
  },
  marginView: {
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  rememberPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 15,
    height: 15,
    marginRight: 5,
    borderRadius: 0,
  },
});
