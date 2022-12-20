import { Text, View, TextInput, Button as ButtonOrigin, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


 const Input = ({holder, keyboard, seguranca}) => {

    return (
       
        <TextInput placeholder={holder} keyboardType={keyboard} secureTextEntry={seguranca} placeholderTextColor="#000" style={style.InputC}/>
      
    )
}

export {Input}

const style = StyleSheet.create({

  InputC:{
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textIndent: 'center',
    height: 48,
    width: 250,
    borderRadius: 10,
    marginBottom: 15,
    paddingTop: 0,
  },
 
})
