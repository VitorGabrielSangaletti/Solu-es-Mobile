import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePokemon from "./Screens/HomePokemon";
import Login from "./Screens/Login";

export default function App{
   
    const Stack = createNativeStackNavigator();

    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"> {/*initialRouteName="Login" = vai iniciar em Login, tlg? a primiera pg vai ser login*/}
                <Stack.Screen>
                    
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}