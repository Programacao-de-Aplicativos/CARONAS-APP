import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Pressable, Alert, TouchableOpacity} from 'react-native'
import Detalhes from './Detalhes.js'
import { css } from '../assets/css/Css';

export default function DetCarona()
{

  const [Estacionamento, setEstacionamento] = useState("A");
  const [Destino, setDestino] = useState('Destino');
  const [Horario, setHorario] = useState('Horario de Saida');
  const [Vagas, setVagas] = useState(0);
  const [Modelo, setModelo] = useState('Civic');
  const [Placa, setPlaca] = useState('Placa');
  const [Cor, setCor] = useState('Prata');


  return(
    
    <View>
      
      <View>
      <Detalhes  destino = {Destino} 
      modelo = {Modelo} 
      cor = {Cor} 
      placa = {Placa} 
      estacionamento = {Estacionamento} 
      vagas = {Vagas}
      horario = {Horario}
      />
      </View> 

    
      <View>
     <TouchableOpacity style={css.button_Joao} onPress={() => Alert.alert('CARONA GARANTIDA!!!')}>
            <Text style={css.textButton}>PEGAR CARONA</Text>
      </TouchableOpacity>
      </View>

     

  </View>
  );
};

/*----------------------------------------------------------------<TouchableOpacity style={css.button_Joao} onPress={() => Alert.alert('CARONA GARANTIDA!!!')}>
            <Text style={css.textButton}>PEGAR CARONA</Text>
      </TouchableOpacity>
      </View>*/