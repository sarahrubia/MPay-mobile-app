import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import AppButton from '../components/AppButton';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <View style={styles.content}>
        <Image style={styles.img} source={require('../../assets/wallet.png')} />
        <View>
          <Text style={styles.text}>Bem-vindo(a) ao melhor</Text>
          <Text style={styles.bigText}>aplicativo E-Wallet</Text>
          <Text style={styles.smallText}>
            M-Pay: A Melhor carteira digital do mundo!
          </Text>
        </View>
      </View>
      <AppButton title={'COMEÇAR'} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 36,
  },
  img: {
    width: 280,
    height: 304,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  bigText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  smallText: {
    fontSize: 20,
    paddingTop: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
