import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< Updated upstream
import home from './screens/Home';
import game from './screens/Game';
import start from './screens/Start';
import death from './screens/Death';
import about from './screens/About';
=======
import home from './screens/home';
import Game from './screens/Game';
import death from './screens/death';
import win from './screens/Win';
>>>>>>> Stashed changes

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
<<<<<<< Updated upstream
        <Stack.Screen name="Start" component={start} />
        <Stack.Screen name="Game" component={game} />
        <Stack.Screen name="Death" component={death} /> 
        <Stack.Screen name="About" component={about} />       
=======
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="death" component={death} />
        <Stack.Screen name="win" component={win} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Your styles here
});

export default App;
