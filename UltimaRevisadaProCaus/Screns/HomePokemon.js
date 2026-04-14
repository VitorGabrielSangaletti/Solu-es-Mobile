import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

import {pokemons} from "../Data/pokemons";

export default function HomePokemon(){
    return(
        <ScrollView><View style={styles.container}>
            
        
        </View></ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})