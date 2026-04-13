import { Image, Text, TextInput, StyleSheet, View, Button } from "react-native";


export default function Login({navigation}){
  return(
    
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../Sources/shrek.png')}
      />
      <Text style={styles.text}>Login</Text>\

      <TextInput
        style={styles.input}
        placeholder="Usuario"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      

      <Button
          title="Logar"
          color="#0099ff"
          onPress={() => navigation.navigate('HomePokemon')}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ff9900'

  },
  image:{
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 100
  },

  text:{
    fontSize: 30,
    alignContent: 'center',
    fontWeight: 'bolder',
  },
  input:{
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 5,
    width: "60%",
    padding: 5,
    margin: 5,

  },
  



})
