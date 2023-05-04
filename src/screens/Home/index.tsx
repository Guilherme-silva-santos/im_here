import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../Components/Participant";

export function Home() {

    function handleParticipantAdd(){
        alert("Usuário adicionado");
        
    }

  return (
    <View style={styles.container} >
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 4 de Maio de 2023.
      </Text>
      <View style={styles.form}>
        <TextInput 
        placeholder="Nome do Participante"
        placeholderTextColor="#6b6b6b"
        style={styles.input} 
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
            <Text style={styles.buttonText} >+</Text>
        </TouchableOpacity> 
      </View>
      <Participant />
      <Participant />
    </View>
  )
}
