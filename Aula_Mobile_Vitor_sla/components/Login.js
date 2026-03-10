import {View, TextInput, Button, Image, Text, StyleSheet} from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>

            <Image source={require('../Sourcer/shrek.png')}/>
            style={styles.ftshrek}

            <Text style={styles.texto}>Logar</Text>
            
            <TextInput
            style={styles.txtInput}
            placeholder='Usuario'/>
            
            <TextInput
            placeholder='Senha'/>

            <Button
            title='Entrar'/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    texto:{
        fontSize: 30,
        color: '#ff7300ff',
        fontWeight: 'bold'
        
    },
    txtInput:{
        borderColor: '#023dffff',
        borderWidth: 2,
        padding: 5
        
    },

    ftshrek: {
        height: 60,
        width: 150,
        borderRadius: '60%'
    },

    
})