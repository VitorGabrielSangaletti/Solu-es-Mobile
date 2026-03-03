import { View, Text, Image} from 'react-native'

export default function Profile() {
    return(
        <View>
            <Text> Meu primeiro componente</Text>

        </View>
    )
}

export function Person(){
    return(
        <View>
            <Text> Meu componente Pessoa</Text>
        </View>
    )
}

export function Vitor(){
    return(
        <View>
            <Text>Meu primeiro componente sozinho</Text>
            <Image source={require('../Sources/fernandosla.png')}  />
        </View>    
    )
}
