import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Pressable, Alert} from 'react-native'

import { css } from '../assets/css/Css';


export default function Detalhes(props)
{

  return(
  <View View style={css.boxDetails}>


    <Text style={css.textBase}> Destino: {props.destino}</Text>
    <Text style={css.textBase}> Horario de Saida: {props.horario}</Text>
    
    <Text style={css.textBase}> Modelo do carro: {props.modelo}</Text>
    <Text style={css.textBase}> Cor do carro: {props.cor}</Text>
    <Text style={css.textBase}> Placa do carro: {props.placa}</Text>
    <Text style={css.textBase}> Estacionamento: {props.estacionamento}</Text>
    <Text style={css.textBase}> Vagas disponiveis: {props.vagas}/4</Text>


  </View>
  );
};