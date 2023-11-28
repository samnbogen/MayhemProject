import texts from "../utils/texts";
import React from 'react';
<<<<<<< Updated upstream
import { View, Text } from 'react-native';

function DeathScreen({ route }) {
    // Extract the current ID from the route params
    const { id } = route.params;
  
    // Find the text object with the matching ID
    const deathText = texts.find((text) => text.id === id);
  
    return (
      <View>
        <Text>{deathText ? deathText.text : 'Text not found'}</Text>
        {/* You can display other information from the deathText object as needed */}
      </View>
    );
  }
  
  export default DeathScreen;
=======
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import texts from "../utils/texts";

const mayhemImage = require('../img/Mayhem.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    backgroundColor: '#642935',
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dc7426',
    borderRadius: 7,
    width: 200,
  },
  buttonText: {
    color: '#fcf8ee',
    fontSize: 20,
  },
});

function Death({navigation, route}) {
    // Extract the current ID from the route params
    const { id } = route.params;

    // Find the text object with the matching ID
    const deathText = texts.find((text) => text.id === id);

  return (

    <View style={styles.container}>
        <Image source={mayhemImage} style={styles.backgroundImage} />
            <SafeAreaView style={styles.buttonContainer}>
                <View>
                    <Text style={styles.buttonText} >{deathText ? deathText.text : 'Text not found'}</Text>
                </View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('home')}>
                <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
            </SafeAreaView>
    </View>

  );
}

export default Death;
>>>>>>> Stashed changes
