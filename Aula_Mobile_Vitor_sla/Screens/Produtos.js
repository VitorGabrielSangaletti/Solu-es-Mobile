//SQL lite

import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import openDB from "../database/db";
import 'coi-serviceworker';




const db = openDB();

    

const adicionarProduto = async () => {

    const [nome, SetNome] = useState('');
    const [valor, SetValor] = useState('');

    try {
        await db.runAsync(
            'INSERT INTO produtos (name, valor) VALUES (? , ?)' , [nome, parseFloat(valor)])
        
        alert('Produto adicionado')
    } catch (error) {
        console.log(error);
    }
}

export default function Produtos(){
    return(
        <View>
            <Text>Produtos</Text>
            
            <TextInput placeholder="Nome"
            value = {nome}
            onChangeText = {SetNome}/>
           
            <TextInput placeholder="Valor"
            value = {valor}
            onChangeText = {SetValor}/>

            <Button
            title="Cadastrar"
            onPress={adicionarProduto}/>

         



        </View>
    )

}