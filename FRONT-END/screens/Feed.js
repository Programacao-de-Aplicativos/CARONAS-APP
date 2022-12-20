import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Pressable, Image } from 'react-native';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/AntDesign';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function props(){
const [destino, setDestino] = useState("Destino");
const [horario, setHorario] = useState(0);
}

const Tab = createMaterialBottomTabNavigator();

export default function Feed({navigation}, props) {


    return (
    <View style={css.container_Joao}>

      <TouchableOpacity style={css.caronaOnFeed} onPress={() => navigation.navigate('InfoCarona')}>

          <Text style={css.textButton}> Destino: {props.destino} </Text>
          <Text style={css.textButton}> Horario: {props.horario} </Text>

      </TouchableOpacity>
    
      <View style={css.bottomTab}>
      
      <Pressable onPress={() => navigation.navigate('RegistrarCarona')}>
        <Image style={{position:'absolute', left: 50, width: 45, height: 45 }} source={require('../assets/img/telas/Plus_b.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 20 }}>Registrar Carona</Text>
      </Pressable>

        <Image style={{position:'absolute', left: 180, width: 45, height: 45 }} source={require('../assets/img/telas/Home.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 190}}>Feed</Text>
        

      <Pressable onPress={() => navigation.navigate('Perfil')}>
        <Image style={{position:'absolute', left: 310, width: 45, height: 45 }} source={require('../assets/img/telas/User.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 320}}>Perfil</Text>
        </Pressable>


      </View>


    </View>
  );
};

/*
      <View style={css.bottomTab}>
      <Pressable onPress={() => navigation.navigate('RegistrarCarona')}>
        <Image style={{position:'absolute', left: 50, width: 50, height: 50 }} source={require('../assets/img/telas/Plus_b.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 20 }}>Adicionar Carona</Text>

        <Image style={{position:'absolute', left: 280, width: 50, height: 50 }} source={require('../assets/img/telas/Home.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 290}}>Feed</Text>

        </Pressable>
      </View>
*/