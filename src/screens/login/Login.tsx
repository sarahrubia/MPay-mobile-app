import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import * as S from './styled';

import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField';
import { routes } from '../../constants/navigation/constants';

function Login() {
  const navigation = useNavigation();
  return (
    <S.SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <S.ContentView>
        <View>
          <S.TitleText>
            Entrar <S.HighlightText>M-PAY</S.HighlightText>
          </S.TitleText>
        </View>
        <View>
          <S.MarginView>
            <InputField
              placeholder={'Email'}
              placeholderTextColor={'#9F9F9F'}
            />
          </S.MarginView>
          <S.MarginView>
            <InputField
              placeholder={'Senha'}
              placeholderTextColor={'#9F9F9F'}
              secureTextEntry
            />
          </S.MarginView>
          <S.RememberPassword>
            <CheckBox
              boxType="square"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
                borderRadius: 0,
              }}
              onFillColor={'#FFFFFF'}
              onTintColor={'#FFFFFF'}
            />
            <S.SmallText>Lembrar-me</S.SmallText>
          </S.RememberPassword>
        </View>
      </S.ContentView>
      <S.BtnWrapper>
        <AppButton
          title={'ENTRAR'}
          onPress={() => navigation.navigate(routes.DASHBOARD)}
        />
      </S.BtnWrapper>
      <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
    </S.SafeAreaView>
  );
}

export default Login;
