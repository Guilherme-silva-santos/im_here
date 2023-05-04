import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00030c',
      padding: 24,
    },
  
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },

    input:{
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        flex: 1, // para que o input ocupe todo o espaço destinado a ele 
        marginRight: 12,
    },

    buttonText:{
        color: '#fff',
        fontSize: 24,
    },

    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
    },

    form:{
        width: "100%",
        flexDirection:"row",
        marginTop: 36,
        marginBottom: 36,
    }
  })