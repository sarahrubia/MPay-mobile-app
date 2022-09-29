import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import AppButton from '../components/AppButton';
import CheckBox from '@react-native-community/checkbox';

const Login = () => {
  const [passwordInvisible, setPasswordInvisible] = useState(true);

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
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9F9F9F"
            style={styles.inputBox}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#9F9F9F"
            secureTextEntry={passwordInvisible}
            style={styles.inputBox}
          />
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
    marginTop: 250,
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
  inputBox: {
    width: 318,
    height: 51,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#ffffff1e',
    marginBottom: 12,
    color: '#FFFFFF',
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
