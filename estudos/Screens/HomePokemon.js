import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { pokemons } from "../Data/pokemons";

export default function HomePokemon(){
    return(
        <ScrollView><View style={styles.conteiner}>

            <Text style={styles.text}>Pokemon</Text>

            {pokemons.map (pokemonlista => (
            
            <Card>
                <Card.Cover source={{uri: (pokemonlista.image)}}/>

                <Card.Content style={styles.Cards}>

                <Text style={styles.text}>{pokemonlista.name}</Text>
                <Text style={styles.text}>{pokemonlista.description}</Text>
                <Text style={styles.text}>{pokemonlista.type}</Text>
                <Text style={styles.text}>{'⭐'.repeat(pokemonlista.stars)}</Text>

                </Card.Content>

            </Card>

))}
        </View></ScrollView>
    )
}

const styles = StyleSheet.create({

    conteiner:{
        backgroundColor: '#ff8800',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo:{
        fontSize: '30',
        margin: 20,
        fontWeight: 'bold',
    },
    Cards:{
        alignItems: 'center'
    },
    text:{
        justifyContent: 'center'
    }

})