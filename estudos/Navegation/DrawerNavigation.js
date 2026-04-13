
//na teoria ta certo

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "../Screens/Login";
import HomeMotoristas from "../Screens/HomeMotoristas";
import HomePokemon from "../Screens/HomePokemon";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>

       <Drawer.Navigator initialRouteName="Login">
                
                <Drawer.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ title: 'Tela de Login' }}
                />
                
                <Drawer.Screen 
                    name="HomePokemon" 
                    component={HomePokemon} 
                    options={{ title: 'Pokémons' }}
                />
                
                <Drawer.Screen 
                    name="HomeMotoristas" 
                    component={HomeMotoristas} 
                    options={{ title: 'Motoristas de F1' }}
                />

            </Drawer.Navigator>

      </NavigationContainer>
    );
}