import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components/native';

import AppButton from '../components/AppButton';
import InputField from '../components/InputField';
import { routes } from '../constants/navigation/constants';

function Login() {
  const navigation = useNavigation();
  return (
    <StyledSafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <StyledViewContent>
        <View>
          <StyledTextTitle>
            Entrar <StyledTextHighlight>M-PAY</StyledTextHighlight>
          </StyledTextTitle>
        </View>
        <View>
          <StyledMarginView>
            <InputField
              placeholder={'Email'}
              placeholderTextColor={'#9F9F9F'}
            />
          </StyledMarginView>
          <StyledMarginView>
            <InputField
              placeholder={'Senha'}
              placeholderTextColor={'#9F9F9F'}
              secureTextEntry
            />
          </StyledMarginView>
          <StyledRememberPassword>
            <CheckBox
              boxType="square"
              style={StyledCheckbox}
              onFillColor={'#FFFFFF'}
              onTintColor={'#FFFFFF'}
            />
            <StyledSmallText>Lembrar-me</StyledSmallText>
          </StyledRememberPassword>
        </View>
      </StyledViewContent>
      <StyledBtnWrapper>
        <AppButton
          title={'ENTRAR'}
          onPress={() => navigation.navigate(routes.DASHBOARD)}
        />
      </StyledBtnWrapper>
      <StyledForgotPasswordText>Esqueci minha senha</StyledForgotPasswordText>
    </StyledSafeAreaView>
  );
}

export default Login;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #222222;
  align-items: center;
`;

const StyledViewContent = styled.View`
  margin-top: 200px;
`;

const StyledTextTitle = styled.Text`
  font-size: 36px;
  color: #FFFFFF;
  font-weight: 700;
  margin-bottom: 40px;
`;

const StyledTextHighlight = styled.Text`
  color: #1C5BB9;
`;

const StyledSmallText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
`;
const StyledMarginView = styled.View`
  margin-bottom: 10px;
`;

const StyledBtnWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledForgotPasswordText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: underline;
`;

const StyledRememberPassword = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled(CheckBox)`
  width: 15px,
  height: 15px,
  margin-right: 5px,
  border-radius: 0,
`;
