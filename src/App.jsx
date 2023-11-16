import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/Home';
import game from './screens/Game';
import start from './screens/Start';
import death from './screens/Death';
import about from './screens/About';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Start" component={start} />
        <Stack.Screen name="Game" component={game} />
        <Stack.Screen name="Death" component={death} /> 
        <Stack.Screen name="About" component={about} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Your styles here
});

export default App;
