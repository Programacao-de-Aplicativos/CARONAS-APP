import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Pressable, Alert} from 'react-native'
import { css } from '../assets/css/Css';


export default function Motorista(props)
{
  
 return( 
    <View style={css.boxMotorista}> 

    <Text style={css.textButton}> Motorista: {props.nome}</Text>
    <Text style={css.textButton}> Estrelas: {props.estrelas}/5</Text>
    
    </View>


  );
};