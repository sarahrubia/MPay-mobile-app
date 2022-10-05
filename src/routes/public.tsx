import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import { routes } from '../constants/navigation/constants';

type StackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222222',
          },
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
