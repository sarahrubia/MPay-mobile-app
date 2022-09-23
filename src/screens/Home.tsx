import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Wallet from '../assets/wallet.png';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={Wallet} />
        <View>
          <Text style={styles.text}>Bem-vindo(a) ao melhor</Text>
          <Text style={styles.bigText}>aplicativo E-Wallet</Text>
          <Text style={styles.smallText}>
            M-Pay: A Melhor carteira digital do mundo!
          </Text>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>COMEÇAR</Text>
        </TouchableOpacity>
      </View>
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
  btnWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 318,
    height: 63,
    borderRadius: 8,
    backgroundColor: '#1C5BB9',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
