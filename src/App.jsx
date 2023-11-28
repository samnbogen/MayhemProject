import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/home';
import game from './screens/game';
import start from './screens/start';
import death from './screens/death';
import about from './screens/about';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="start" component={start} />
        <Stack.Screen name="game" component={game} />
        <Stack.Screen name="death" component={death} /> 
        <Stack.Screen name="about" component={about} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Your styles here
});

export default App;
