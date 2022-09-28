import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import AppButton from '../components/AppButton';

const Login = () => {
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
            secureTextEntry={true}
            style={styles.inputBox}
          />
          <View>
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
  bg: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  content: {
    top: 200,
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
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
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
});
