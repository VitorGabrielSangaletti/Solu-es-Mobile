import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import Login from "../Screens/Login";
import HomeMotoristas from "../Screens/HomeMotoristas";
import HomePokemon from "../Screens/HomePokemon";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: "#007BFF",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",

        headerStyle: {
          backgroundColor: '#007BFF'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerShown: false
      }}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: () => <Entypo name="log-in" size={20} />
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Entypo name="home" size={20} />
          }}
        />

        <Tab.Screen
          name="Home Pokemon"
          component={HomePokemon}
          options={{
            tabBarIcon: () => <Entypo name="baidu" size={24} />
          }}
        />

        <Tab.Screen
            name="Home Motorista"
            component={HomeMotoristas}
            options={{tabBarIcon: () => <Entypo name='direction' size={24}/>
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}