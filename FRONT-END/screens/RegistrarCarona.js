import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Pressable, Image } from 'react-native';
import {css} from '../assets/css/Css';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from '../assets/components/inputs/Inputs';
 
export default function RegistrarCarona({navigation}) {

  let [vagas, setVagas] = useState('Vagas Disponíveis');
  let [estacionamento, setEstacionamento] = useState('Estacionamento');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate =  new Date(currentDate);
    let fDate = tempDate.getDate() + '/' +  (tempDate.getMonth() + 1)+ '/' + tempDate.getFullYear();
    let fTime = 'Horas: ' + tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  
  return (

    <View style={css.container}>

     <View style={{backgroundColor:'#F2AB1F', width: '100%', height: 80, textAlign: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
      <View style={{position:'absolute', top: 20, left: 90}}>
        <Text style={{color: '#000000', textAlign: 'center', textAlignVertical: 'center', fontSize: 30}}>Registrar Carona</Text>
      </View>
      </View>

      <View style={{position:'absolute', top: 173}}>
      <TextInput style={css.Inputs} placeholder="Modelo do carro" keyboardType='default' secureTextEntry={false} placeholderTextColor="#000" />
    </View>

    <View style={{position:'absolute', top: 229}}>
      <TextInput style={css.Inputs} placeholder="Destino" keyboardType='default' secureTextEntry={false} placeholderTextColor="#000"/>
    </View>

      <View style={{position: 'absolute', top: 285, width: 250, height: 48, backgroundColor: '#ffffff', borderRadius: 10}}>
        <TouchableOpacity onPress={()=> showMode('date')}>
           <Text style={{color:'#000000', fontSize: 18, textAlign: 'center', textAlignVertical: 'center',  position: 'absolute', top: 10, left: 20}}>Escolha data de saída</Text>
        </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', top: 340, width: 250, height: 48, backgroundColor: '#ffffff', borderRadius: 10}}>
        <TouchableOpacity onPress={()=> showMode('time')}>
           <Text style={{color:'#000000', fontSize: 18, textAlign: 'center', textAlignVertical: 'center', position: 'absolute', top: 10, left: 15}}>Escolha a hora de saída</Text>
        </TouchableOpacity>
      </View>

      {show && (<DateTimePicker
        testID='dateTimerPicker'
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
      />)}
       
          <View style={{width: 250, height: 50, backgroundColor: '#ffffff', position: 'absolute', top: 395, borderRadius: 10}}>
      <Picker style={{textAlign: 'center'}}
        selectedValue={vagas}
        onValueChange={(item, indexItem)=>{setVagas(item)}}
      >
        <Picker.Item label="Vagas Disponíveis" value="Vagas Disponíveis" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
      </Picker>
    </View>

    <View style={{width: 250, height: 50, backgroundColor: '#ffffff', position: 'absolute', top: 452, borderRadius: 10}}>
      <Picker style={{textAlign: 'center'}}
        selectedValue={vagas}
        onValueChange={(item, indexItem)=>{setVagas(item)}}
      >
        <Picker.Item label="Estacionamento" value="Estacionamento" />
        <Picker.Item label="Superior" value="Superior" />
        <Picker.Item label="Inferior" value="Inferior" />
      </Picker>
    </View>

      <View style={{position: 'absolute', top:540}}>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Perfil')}>
           <Text style={{color:'#232121', fontWeight:'bold', fontSize: 18}}>Confirmar</Text>
        </TouchableOpacity>
      </View>

    <View style={css.bottomTab}>
        <Image style={{position:'absolute', left: 50, width: 45, height: 45 }} source={require('../assets/img/telas/Plus_b.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 20 }}>Registrar Carona</Text>


        <Pressable onPress={() => navigation.navigate('Feed')}>
        <Image style={{position:'absolute', left: 180, width: 45, height: 45 }} source={require('../assets/img/telas/Home.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 190}}>Feed</Text>
        </Pressable>


      <Pressable onPress={() => navigation.navigate('Perfil')}>
        <Image style={{position:'absolute', left: 310, width: 45, height: 45 }} source={require('../assets/img/telas/User.png')}></Image>
        <Text style={{fontWeight:'bold', position:'absolute', top: 42, left: 320}}>Perfil</Text>
        </Pressable>


      </View>


  </View>
  );
};
   
/*

    <View style={css.container}>    
          <TextInput placeholder="Destino" placeholderTextColor="#000000"
          style={{borderRadius: 10, 
          backgroundColor: '#ffffff',
           width: 250,
            height: 50, 
            position: 'absolute',
             top: -153}}/>
          </View>
*/