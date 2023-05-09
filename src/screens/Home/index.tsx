import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../Components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  // primeira posição o estado e a segunda posição a função que atualiza o estado

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existe',
        'Já existe uma participante na lista com este nome',
      )
    }
    setParticipants((prevState) => [...prevState, participantName])
    // usa a função que altera o estado, passa o prevstate que é uma função onde estão armazenados os dados
    // que já existem no estado, passa essa função para dentro do array usando o ... para percorre-la e passando ana
    // que sera adicionado
    setParticipantName('') // colocando o participant name que é o que esta sendo digitado na caixa de texto
    // e limpa ele e passando o value no textiput o valor dele volta para "nada"
    // toda vez que um participante for adicionado ele limpara o estado que é o valor que foi passado para o value
    // do text input
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name} ?`, [
      // primeiro parametro o titulo, segundo a mensagem, e o terceiro o potão que deseja colocar
      {
        text: 'Sim',
        // aparece um alerta perguntando se deseja excluir o participante
        // se sim ele vai pro onpress onde esta a função que deketa o participante
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name),
          ),
        // pega a fução que atualiza o estado (setParticipants), acessa o conteudo atual e percorre ele
        // (participant) => participant.filter((participant) => participant utilizando um filtro,
        //  para retornar todos os participantes menos o que eu cliquei para ser deletado
        // filtra o estado de participantes e a condição do filter é, eu quero que retorne todos os participantes,
        // que o nome deste participante é diferente do nome que eu quero deleltar
      },

      {
        text: 'não',
        style: 'cancel',
      },
    ])

    // alert(`participante excluido ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Quinta, 4 de Maio de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          style={styles.input}
          onChangeText={setParticipantName}
          // serve para pegar o texto que esta sendo digitado no textinput
          // guardando o texto digitado dentro do estado setParticipantName(text)
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        /**
         * flatList é outra maneira de fazer o scroll em listas
         * e ele recebe três props
         *
         * data onde é passado a coleção de dados que sera percorrida
         * fazendo como se fosse um map
         *
         * keyExtractor é como se fosse a key do map onde peassa o item pegando o elemento do dado
         * ou seja percorre cada item e passando o item que sera a chave
         *
         * renderItem o que sera renderizado em cada item da lista
         *
         * ListEmptyComponent caso a lista esteja vazia tem uma mensagem
         */
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes nas sua lista{' '}
          </Text>
        )}
      />
    </View>
  )
}
