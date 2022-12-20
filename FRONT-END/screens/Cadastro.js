
import React, {useState, useEffect, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {css} from '../assets/css/Css';
import {Input} from '../assets/components/inputs/Inputs';
import * as ImagePicker from 'expo-image-picker';

export default function Cadastro({navigation}) {
  
  const [image, setImage] = useState(null);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
  
  <View style={css.container}>
    
       <Image style={css.img_Cadastro} source={require('../assets/img/telas/logo.png')}/>
    
      <Text style={css.texto}>CADASTRO</Text>
    
      <View style={css.container}>    
    
      <KeyboardAvoidingView style={css.container}>

    <View style={{position:'absolute', top: 40}}>
      <TextInput style={css.Inputs} placeholder="Nome Completo" keyboardType='default' secureTextEntry={false} placeholderTextColor="#000" />
    </View>
  
    <View style={{position:'absolute', top: 100}}>
      <TextInput style={css.Inputs} placeholder="RA" keyboardType='numeric' secureTextEntry={false} placeholderTextColor="#000"/>
    </View>

    <View style={{position:'absolute', top: 160}}>
      <TextInput style={css.Inputs} placeholder="E-mail" keyboardType='email-address' secureTextEntry={true} placeholderTextColor="#000"/>
    </View>

    <View style={{position:'absolute', top: 220}}>
      <TextInput style={css.Inputs} placeholder="Senha" keyboardType='default' secureTextEntry={true} placeholderTextColor="#000" />
    </View>


        <View style={{position: 'absolute', top:280}}>
        <TouchableOpacity style={{backgroundColor: '#ffffff', width: 250, height: 48, borderRadius: 10}}  onPress={pickImage} >
             <Text style={{color:'#000000', position: 'absolute', top: 10, justifyContent: 'center'}}>Selecione uma imagem</Text>
          </TouchableOpacity>
        </View>
       
        <View style={{position: 'absolute', top:340}}>
          <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Login')}>
             <Text style={{color:'#232121', fontWeight:'bold', fontSize:18}}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      </View> 
      
      <StatusBar style="auto" />

  </View>
    
  );
};

