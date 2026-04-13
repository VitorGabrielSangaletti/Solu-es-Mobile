import {Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { drivers } from "../Data/drivers";

export default function HomeMotoristas(){

    return(
        <ScrollView>
           
           <View style={styles.conteiner}>
                
                <Text style={styles.titulo}>Titulo</Text>
                
                {drivers.map((motoristas) =>(
            
            <Card>
                
                <Card.Cover source={{uri: (motoristas.image)}} /> 
                
                <Card.Content style={styles.cards}>
                   
                   <Text style={styles.text}>{motoristas.name}</Text>
                    <Text style={styles.text}>{motoristas.description}</Text>
                    <Text style={styles.text}>{motoristas.team}</Text>
                    <Text style={styles.text}>{motoristas.country}</Text>
                    <Text style={styles.text}>{'⭐'.repeat (motoristas.stars)}</Text>

               
                </Card.Content>
                
            </Card>


                ))}
            </View>
        </ScrollView>
    )}

const styles = StyleSheet.create({

    conteiner:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        margin: 30
    },
    text:{
        justifyContent: 'center'
    },
    cards:{
        alignItems:'center'
    },
   
    
})