import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Profile from './components/Profile';
import {Person, Vitor} from './components/Profile';


export default function App() {
  return (
    <View style={styles.container}>
      <Person />
      <Text>Cemaq</Text>
      <StatusBar style="auto" />
      <Profile />
      <Vitor />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#ff8a03ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
