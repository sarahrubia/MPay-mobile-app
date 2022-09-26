import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import { styles } from './styles';
import Wallet from '../../assets/wallet.png';

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
