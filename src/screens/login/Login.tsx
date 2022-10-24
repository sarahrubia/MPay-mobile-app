import React, { useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';

import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField';
import { authenticate } from '../../store/auth/actions';
import login from '../../services/auth';

import * as S from './styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleLogin() {
    try {
      let credentials = await login(email, password);
      dispatch(authenticate(credentials));
    } catch (error) {
      Alert.alert(error.message);
    }
  }
  return (
    <S.SafeAreaViewContext>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <S.ContentView>
        <View>
          <S.Title>
            Entrar <S.CompanyName>M-PAY</S.CompanyName>
          </S.Title>
        </View>
        <View>
          <S.TextInputContainer>
            <InputField
              placeholder={'Email'}
              placeholderTextColor={'#9F9F9F'}
              value={email}
              onChangeText={setEmail}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />
          </S.TextInputContainer>
          <S.TextInputContainer>
            <InputField
              placeholder={'Senha'}
              placeholderTextColor={'#9F9F9F'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </S.TextInputContainer>
          <S.RememberPassword>
            <S.Checkbox
              boxType="square"
              onFillColor={'#FFFFFF'}
              onTintColor={'#FFFFFF'}
            />
            <S.SmallText>Lembrar-me</S.SmallText>
          </S.RememberPassword>
        </View>
      </S.ContentView>
      <S.SubmitButtonWrapper>
        <AppButton title={'ENTRAR'} onPress={handleLogin} />
      </S.SubmitButtonWrapper>
      <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
    </S.SafeAreaViewContext>
  );
}

export default Login;
