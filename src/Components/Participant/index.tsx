import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
  name: string
  onRemove: () => void // para tipar a prop como uma function
}

export function Participant({ name, onRemove }: Props) {
  // passando props para dizer qual é o tipo do objeto nome
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        {/* no onpress chama a  função que foi passada como propriedade no component exportado na home 
            e tipo essa prop como uma função s
        */}
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
