import React, {useState, useEffect, Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Cadastro, RegistrarCarona, Feed, InfoCarona, Perfil} from './screens/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{title:'' , 
          headerTransparent:true, 
          headerTintColor:'#F2AB1F'}}
         />

        <Stack.Screen name="Cadastro" 
          component={Cadastro}
          options={{title:'' , 
          headerTransparent:true, 
          headerTintColor:'#F2AB1F'}}
         />

        <Stack.Screen name = 'Feed'
         component = {Feed}
         options={{title:'' , 
         headerTransparent:true, 
         headerTitleAlign:'center',
         headerTintColor:'#000000'}}
          />
        
        <Stack.Screen name = 'InfoCarona'
         component = {InfoCarona} 
         options={{title:'' , 
         headerTransparent:true, 
         headerTitleAlign:'center',
         headerTintColor:'#000000'}}
         />

        <Stack.Screen 
          name="RegistrarCarona" 
          component={RegistrarCarona}
          options={{title:'' , 
          headerTransparent:true, 
          headerTitleAlign:'center',
          headerTintColor:'#000000'}}
        />

        <Stack.Screen 
          name="Perfil" 
          component={Perfil}
          options={{title:'' , 
          headerTransparent:true, 
          headerTitleAlign:'center',
          headerTintColor:'#000000'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
