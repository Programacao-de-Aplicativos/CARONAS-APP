import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';


export default function TelaServicos({navigation}) {
  return (
    
    <View style={css.container}>
      <View style={css.availableService}>
      <Button 
        title='Nome do Motorista' color={'#F2AB1F'} onPress={() => navigation.navigate('telaCarona')}
        />
      <Text style={{ fontWeight: 'light' , color: 'white' , fontSize : 20, lineHeight: 40, position:'relative'}}>
      4/5 estrelas </Text>

      </View>
      <View style={css.driverProfilePic}>

      <View style={{position: 'absolute', top:360}}>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('RegistrarCarona')}>
           <Text style={{color:'#fff'}}>Confirmar</Text>
        </TouchableOpacity>
      </View>
        

      </View>
    </View>
  );
};