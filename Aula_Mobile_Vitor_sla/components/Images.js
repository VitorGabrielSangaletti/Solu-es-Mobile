import {View, Image , StyleSheet} from 'react-native';

export default function Imagem(){
    return(
        <View style={styles.view_image}>
            <Image style={styles.Image} source={require('../Sources/fernandosla.png')}/>
            <Image style={styles.Image} source={require('../Sources/shrek.png')}/>
  
        </View>
    )
}

//Praticamente cria um "Css" 
const styles = StyleSheet.create({
  Image:{
    width: 150,
    height: 200,
  },
  view_image:{
    flexDirection: 'row', // Coloca os itens na horizontal (lado a lado)
    alignContent: 'space-around', // Distribui o espaço igual entre as linhas de itens
    gap: 20, // Espaçamento de 20px entre cada item
    flexWrap: 'wrap', // Faz os itens quebrarem para a próxima linha se não couberem
    justifyContent: 'center',
  }
})