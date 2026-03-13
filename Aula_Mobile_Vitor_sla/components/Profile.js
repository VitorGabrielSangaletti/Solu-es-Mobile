//Teste de importações


// Importamos os componentes básicos necessários do react-native
import { View, Text, Image } from 'react-native'

// export defalt: É o componente principal do arquivo. 
// No App.js, ele é importado como: import Profile from './components/Profile';
export default function Profile() {
    return(
        <View>
            <Text> Meu primeiro componente</Text>
        </View>
    )
}

// export nomeado: Você pode ter vários desses no mesmo arquivo.
// No App.js, ele é importado entre chaves: import { Person } from './components/Profile';
export function Person(){
    return(
        <View>
            <Text> Meu componente Pessoa</Text>
        </View>
    )
}

// Outro EXPORT NOMEADO.
export function Vitor(){
    return(
        <View>
            <Text>Meu primeiro componente sozinho</Text>
            {/* A Image aqui usa '../' para subir um nível na pasta (sair de components) 
               e entrar na pasta Sources. 
            */}
            <Image 
                source={require('../Sources/fernandosla.png')} 
                style={{ width: 500, height: 100 }} // Dica: Imagens locais às vezes precisam de tamanho definido!
            />
             <Image 
                source={require('../Sources/shrek.png')} 
                style={{ width: 100, height: 100 }} // Dica: Imagens locais às vezes precisam de tamanho definido!
            />
        </View>    
    )
}