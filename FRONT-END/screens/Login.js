import React, { useState, useEffect, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { css } from '../assets/css/Css';
import { Input } from '../assets/components/inputs/Inputs';

/*app
    <View style={{position: 'absolute', top: 240}}>
        <Input holder="RA" keyboard="numeric" seguranca={false} onChangeText={text=>setUser(text)}/>
    </View>
    */


export default function Login({ navigation }) {


  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);


  async function loga() {
    let response = await fetch('http://192.168.15.77:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ra: user,
        password: password
      })

    });
    
    console.log('login')

    let json = await response.json();
    if(json === 'error'){
      Alert.alert('Login não reconhecido')
    } else{
      navigation.navigate('Feed')
    }
    
  }
 
  return (

    <View style={css.container}>

      <Image style={css.img_Login} source={require('../assets/img/telas/logo_2.png')}></Image>


      <Text style={{ color: '#000000', backgroundColor: '#ffffff', position: 'absolute', top: 220 }}> {user} - {password}</Text>
      
    <View style={{position:'absolute', top: 240}}>  
      <TextInput style={css.Inputs} placeholder="RA" keyboardType='numeric' secureTextEntry={false} placeholderTextColor="#000" onChangeText={text => setUser(text)} />
    </View>

    <View style={{position:'absolute', top: 300}}>
      <TextInput style={css.Inputs} placeholder="Senha" keyboardType='default' secureTextEntry={true} placeholderTextColor="#000" onChangeText={text => setPassword(text)} />
    </View>


      <View style={{ position: 'absolute', top: 360 }}>
        <TouchableOpacity style={css.button} onPress={() => loga()}>
          <Text style={{ color: '#232121', fontWeight: 'bold', fontSize: 18 }}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <Pressable style={css.semCadastro1} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={css.semCadastro}>Não tem conta?</Text>
        <Text style={css.semCadastro}>Cadastre-se</Text>
      </Pressable>

      <Image style={css.ellipse} source={require('../assets/img/telas/ellipse_2.png')}></Image>
      <Image style={css.carro1} source={require('../assets/img/telas/carro1.png')}></Image>
      <Image style={css.carro2} source={require('../assets/img/telas/carro2.png')}></Image>
      <Image style={css.carro3} source={require('../assets/img/telas/carro3.png')}></Image>

      <StatusBar style="auto" />
    </View>

  );
};