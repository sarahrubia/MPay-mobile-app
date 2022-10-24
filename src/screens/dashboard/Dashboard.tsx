import React from 'react';
import { Image, ScrollView, StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';

import AppButton from '../../components/AppButton';
import * as S from './styled';
import { logout } from '../../store/auth/actions';

const Dashboard = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View>
          <Image source={require('../../assets/header_content.png')} />
          <Image source={require('../../assets/dashboard_content.png')} />
        </View>
        <View />
        <S.SubmitButtonWrapper>
          <AppButton title={'Logout'} onPress={handleLogout} />
        </S.SubmitButtonWrapper>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
