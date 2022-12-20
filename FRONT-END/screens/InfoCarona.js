import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import TitleInfoCarona from './TItleInfoCarona.js';
import {css} from '../assets/css/Css';
import DetCarona from './DetCarona.js';
import DetMotorista from './DetMotorista.js';

export default function InfoCarona({navigation}) {

    return (
    <View style={css.container_Joao}>

      <TitleInfoCarona/>

      <DetMotorista/>
      
      <DetCarona/>

      <View style={css.bottomTab}>
      
      <Pressable onPress={() => navigation.navigate('RegistrarCarona')}>
        <Image style={{position:'absolute', left: 50, width: 45, height: 45 }} source={require('../assets/img/telas/Plus_b.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 20 }}>Registrar Carona</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Feed')}>
        <Image style={{position:'absolute', left: 180, width: 45, height: 45 }} source={require('../assets/img/telas/Home.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 190}}>Feed</Text>
        </Pressable>
        

      <Pressable onPress={() => navigation.navigate('Perfil')}>
        <Image style={{position:'absolute', left: 310, width: 45, height: 45 }} source={require('../assets/img/telas/User.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 320}}>Perfil</Text>
        </Pressable>


      </View>
  
    </View>

      

  );
};

