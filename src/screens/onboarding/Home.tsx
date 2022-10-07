import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styled';

import AppButton from '../../components/AppButton';
import { routes } from '../../constants/navigation/constants';

function Home() {
  const navigation = useNavigation();
  return (
    <S.ContainerView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <S.ContentView>
        <S.HeaderImage source={require('../../assets/wallet.png')} />
        <View>
          <S.Text>Bem-vindo(a) ao melhor</S.Text>
          <S.BigText>aplicativo E-Wallet</S.BigText>
          <S.SmallText>M-Pay: A Melhor carteira digital do mundo!</S.SmallText>
        </View>
      </S.ContentView>
      <S.BtnWrapper>
        <AppButton
          title={'COMEÇAR'}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </S.BtnWrapper>
    </S.ContainerView>
  );
}

export default Home;
