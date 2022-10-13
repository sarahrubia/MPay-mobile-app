import React from 'react';
import { StatusBar, View } from 'react-native';
import * as S from './styled';

import AppButton from '../../components/AppButton';
import { routes } from '../../constants/navigation/constants';

function Home({ navigation }) {
  return (
    <S.ContainerView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <S.ContentView>
        <S.HeaderImage source={require('../../assets/wallet.png')} />
        <View>
          <S.WelcomeText>Bem-vindo(a) ao melhor</S.WelcomeText>
          <S.WalletText>aplicativo E-Wallet</S.WalletText>
          <S.AppDescription>
            M-Pay: A Melhor carteira digital do mundo!
          </S.AppDescription>
        </View>
      </S.ContentView>
      <S.SubmitButtonWrapper>
        <AppButton
          title={'COMEÇAR'}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </S.SubmitButtonWrapper>
    </S.ContainerView>
  );
}

export default Home;
