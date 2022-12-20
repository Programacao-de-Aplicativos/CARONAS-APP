import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Pressable, Alert} from 'react-native'

import Motorista from './Motorista.js';


import { css } from '../assets/css/Css';


export default function DetMotorista()
{
  const [Nome, setNome] = useState("X");
  const [Estrelas, setEstrelas] = useState(0);


  return(
  <View>
      <View>

      <Motorista
      nome = {Nome} 
      estrelas = {Estrelas} 
      />

    
      </View>

  </View>
  
  );
};