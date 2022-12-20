import { StyleSheet } from 'react-native';

const css = StyleSheet.create({

  bottomTab: {
    width: '100%', 
    height: 64, 
    backgroundColor: '#F2AB1F', 
    position:'absolute', 
    top: 619, 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  boxTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 20, 
    paddingLeft: 20,
   // padding: 20, 
  },

  boxMotorista: {
    width:'90%',
    height: 100,
    paddingHorizontal:50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 40,
    borderRadius: 10,
    marginLeft: 20
  },

  boxDetails: {
    width:'90%',
    height: 'auto',
    paddingHorizontal:50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#232121',
    marginTop: 5,
    borderRadius: 15,
    marginLeft: 20,
  },


  button:{
    backgroundColor: '#F2AB1F',
    width: 200,
    //color: '#FFFFFF',
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
},

  carro1:{
    position: 'absolute',
    top: 533,
    left: 20,
    width: 110,
    height: 110,
  },

  carro2:{
    position: 'absolute',
    top: 514,
    left: 160,
    width: 80,
    height: 80,
  },

  carro3:{
    position: 'absolute',
    top: 525,
    left: 280,
    width: 116,
    height: 122,
  },

    container: {
      flex: 1,
      backgroundColor: '#232121',
      alignItems: 'center',
      // justifyContent: 'center',
      color: '#F2AB1F',
    },

    container_Joao: {
      flex: 1,
      backgroundColor: '#232121',
      paddingVertical:80
    },

    button_Joao: {
      alignItems: 'center',
      justifyContent: 'center',
      width:'70%',
      height:'auto',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: '#F2AB1F',
      marginTop: 10,
      marginLeft: 65,
    },
  
    caronaOnFeed: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      width:'80%',
      height:'15%',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: '#F2AB1F',
      marginTop: 100,
      marginLeft: 40
    },

    ellipse:{
      position: 'absolute',
      top: 570,
      left: 0,
      width: 405,
      height: 200,
    },

    img_Cadastro:{
      position: 'absolute',
      top: 50,
      width: 325,
      height: 75
    },

    img_Login:{
      position: 'absolute',
      top: 100,
      width: 325,
      height: 75
    },

    infoPerfil:{
      backgroundColor: '#ffffff', 
      color: '#000000',
      width: 220,
      height: 40,
      fontSize: 20, 
      textAlign: 'center',
      verticalAlign: 'middle',
      borderRadius: 20,
    },

    infoCampoPerfil:{
      color: '#F2AB1F',
      fontSize: 20, 
      textAlign: 'center',
      position: 'absolute',
      top: 300,
      verticalAlign: 'middle',
      borderRadius: 20,
    },

    Inputs:{
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      textIndent: 'center',
      height: 48,
      width: 250,
      borderRadius: 10,
      marginBottom: 15,
      paddingTop: 0,
     // position: 'absolute',
      //top: 240,
    },

    Input:{
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      textIndent: 'center',
      color: '#000000',
      position: 'absolute',
      top: 240,
      left: -120,
      height: 48,
      width: 245,
      //borderRadius: 10,
      marginBottom: 15,
      paddingTop: 0,
    },

    nomePerfil:{
      color: '#F2AB1F', 
      textAlign: 'center',
      fontSize: 25,
      position: 'absolute',
      top: 208,
    },  

    profileImage:{
      width: 170,
      height: 170,
      borderRadius: 100,
      overflow: 'hidden',
      position: 'absolute',
      top: 20,

    },

    semCadastro1:{
      position: 'absolute',
      left: 132,
      top: 440,
    },

    semCadastro:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },


    texto:{
       //flex: 1,
       backgroundColor: '#232121',
       alignItems: 'center',
       justifyContent: 'center',
       color: '#F2AB1F',
       fontSize: 32,
       marginTop: 180,
      },

      textBase:{
          color: 'white',
          padding : 5,
          fontWeight: 'bold',
          fontSize: 20
      },
  
      textTitle:{
        color: '#F2AB1F',
        fontWeight: 'bold',
        fontSize: 40,
        position: 'absolute',
        marginBottom: 5
    },
  
    textButton:{
      color: '#232121',
      padding : 5,
      fontWeight: 'bold',
      fontSize: 20
  },

    }); 

export {css};
