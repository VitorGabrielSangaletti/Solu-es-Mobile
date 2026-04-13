
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import HomePokemon from './Screens/HomePokemon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="HomePokemon" 
          component={HomePokemon} 
          options={{ title: 'Pokémons' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

