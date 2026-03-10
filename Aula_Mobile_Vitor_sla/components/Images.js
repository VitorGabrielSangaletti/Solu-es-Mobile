//Teste de imagens


import { View, Image, StyleSheet } from "react-native";

export default function Images(){
        return(
        <View style={styles.view_image}>
          {/* Exibe uma imagem local. Verifique se o caminho './Sources/...' está correto! */}
          <Image style={styles.imagem} source={require('../Sources/fernandosla.png')}></Image>
          <Image style={styles.imagem} source={require('../Sources/shrek.png')}></Image>
        </View>
    )}
            
const styles = StyleSheet.create({   
imagem:{
    height: 250,
    width: 175, 
  },

view_image:{
    flexDirection:'row',
    gap:15,   
  },
})