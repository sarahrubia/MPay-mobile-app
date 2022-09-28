import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

import { loginScreen } from '../constants/navigation/constants';
import { homeScreen } from '../constants/navigation/constants';

type StackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={homeScreen}>
        <Stack.Screen name={homeScreen} component={Home} />
        <Stack.Screen name={loginScreen} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
