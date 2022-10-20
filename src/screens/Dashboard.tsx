import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import AppButton from '../components/AppButton';
import { DECREMENT_VALUE, INCREMENT_VALUE } from '../redux/actions';

const Dashboard = () => {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text>Dashboard</Text>
        <Text>Valor: {count}</Text>
      </View>
      <View>
        <AppButton
          title={'Incrementar'}
          onPress={() => dispatch({ type: INCREMENT_VALUE })}
        />
        <AppButton
          title={'Decrementar'}
          onPress={() => dispatch({ type: DECREMENT_VALUE })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

// const styles = StyleSheet.create({});
