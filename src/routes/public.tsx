import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/Home';
import LoginScreen from '../screens/login/Login';
import DashboardScreen from '../screens/dashboard/Dashboard';
import { routes } from '../constants/navigation/constants';
import { useSelector } from 'react-redux';
import { getToken } from '../store/auth/selectors';

type StackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes = () => {
  const token = useSelector(getToken);
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
        {!token ? (
          <>
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
          </>
        ) : (
          <Stack.Screen
            options={{
              headerTitleStyle: {
                color: 'transparent',
              },
            }}
            name={routes.DASHBOARD}
            component={DashboardScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
