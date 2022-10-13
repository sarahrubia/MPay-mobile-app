import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/Home';
import LoginScreen from '../screens/login/Login';
import DashboardScreen from '../screens/Dashboard';
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
        <Stack.Screen
          options={{ headerShown: false }}
          name={routes.HOME}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
          }}
          name={routes.LOGIN}
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              color: 'transparent',
            },
          }}
          name={routes.DASHBOARD}
          component={DashboardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
