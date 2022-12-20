import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Image, TouchableOpacity, SafeAreaView, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import {css} from '../assets/css/Css';



export default function TelaCarona({navigation}) {
  return (
    <View style={css.container}>
      <View style={css.driverDetails}></View>
      <View style={css.driverDetails}>
      <Text style={{ fontWeight: 'bold' , color: 'white' , fontSize : 25, lineHeight: 80}}> 
      Nome do Motorista</Text>
      <Text style={{ fontWeight: 'light' , color: 'white' , fontSize : 20, lineHeight: 30}}>
      4/5 estrelas </Text>
      </View>
      
      <View style={css.rideDetails}>
      <Text style={{ fontWeight: 'bold' , color: 'white' , fontSize : 30, lineHeight: 80}}> 
      Destino e Horario de Saída</Text>
      <Text style={{ fontWeight: 'light' , color: 'white' , fontSize : 20, lineHeight: 30}}>
      Modelo e cor do carro </Text>
      <Text style={{ fontWeight: 'light' , color: 'white' , fontSize : 20, lineHeight: 30}}>
      Placa do carro </Text>
      <Text style={{ fontWeight: 'light' , color: 'white' , fontSize : 20, lineHeight: 30}}> 
      Estacionamento A </Text>
      </View>

      <View style={{position: 'absolute', top:360}}>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('RegistrarCarona')}>
           <Text style={{color:'#fff'}}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
