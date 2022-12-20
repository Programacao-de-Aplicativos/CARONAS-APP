import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


 const Botao = ({labelButton}) => {

    return (
       <TouchableOpacity style={style.button}>
        <Text style={{color:'#fff'}}>{labelButton}</Text>
       </TouchableOpacity>
    )
}

export {Botao}

const style = StyleSheet.create({

    button:{
        backgroundColor: '#9C9C9C',
        width: 200,
        //color: '#FFFFFF',
        borderRadius: 10,
        height: 35,
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
