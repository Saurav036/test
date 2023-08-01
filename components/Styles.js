import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'lightblue',
      padding:20
    },
    input:{
      width:300,
      height:50,
      padding:10,
      backgroundColor:'#eee',
      marginBottom:20,
      marginTop:20,
      borderRadius:5
    },
    h:{
      fontSize:70,
      margin:30
    },
    button: {
      borderRadius:5,
      marginBottom: 30,
      marginTop: 30,
      width: 200,
      alignItems: 'center',
      backgroundColor: '#2196F3',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize:20
    },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        // marginLeft:20,
      }
  });

  