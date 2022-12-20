import React, {useState, useEffect, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Button, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {css} from '../assets/css/Css';

export default function Perfil({navigation}){

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
  
return(

  <View style={css.container}>

    <View style={{backgroundColor:'#F2AB1F', width: '100%', height: 110, textAlign: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
     </View>

    <View style={css.profileImage}>
      <Image source={require('../assets/img/telas/perfil.png')}></Image>
    </View>

    <Text style={css.nomePerfil}>NOME COMPLETO</Text>

  <View style={{position: 'absolute', top: 280}}>
    <Text style={css.infoPerfil}>XXXXXXX</Text>
  </View>

  <View style={{position: 'absolute', top: 20, left: 200}}>
    <Text style={css.infoCampoPerfil}>RA</Text>
  </View>

  <View style={{position: 'absolute', top: 360}}>
    <Text style={css.infoPerfil}>DD/MM/YYYY</Text>
  </View>

  <View style={{position: 'absolute', top: 100, left: 145}}>
    <Text style={css.infoCampoPerfil}>Membro Desde</Text>
  </View>

  <View style={{position: 'absolute', top: 440}}>
    <Text style={css.infoPerfil}>X</Text>
  </View>

  <View style={{position: 'absolute', top: 180, left: 145}}>
    <Text style={css.infoCampoPerfil}>Caronas Pegas</Text>
  </View>

  <View style={{position: 'absolute', top: 520}}>
    <Text style={css.infoPerfil}>X</Text>
  </View>

  <View style={{position: 'absolute', top: 260, left: 128}}>
    <Text style={css.infoCampoPerfil}>Caronas Postadas</Text>
  </View>
    

  <View style={css.bottomTab}>
    <Pressable onPress={() => navigation.navigate('RegistrarCarona')}>
        <Image style={{position:'absolute', left: 50, width: 45, height: 45 }} source={require('../assets/img/telas/Plus_b.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 20 }}>Registrar Carona</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Feed')}>
        <Image style={{position:'absolute', left: 180, width: 45, height: 45 }} source={require('../assets/img/telas/Home.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 190}}>Feed</Text>
        </Pressable>

        <Image style={{position:'absolute', left: 310, width: 45, height: 45 }} source={require('../assets/img/telas/User.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 320}}>Perfil</Text>
  </View>


    </View>
    );
};