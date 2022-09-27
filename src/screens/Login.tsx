import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <AppButton title={'LOGIN'} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({

});

