import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { css } from '../assets/css/Css';


export default function TitleInfoCarona()
{

    return (
        
        <View style={css.container}>

        <View style={{backgroundColor:'#F2AB1F', width: '100%', height: 75, textAlign: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
        <View style={{position:'absolute', top: 20, left: 115}}>
        <Text style={{color: '#000000', textAlign: 'center', textAlignVertical: 'center', fontSize: 30}}>Informações</Text>
      </View>
      </View>

        </View>  
          
    );
};