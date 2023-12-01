import texts from "../utils/texts";
import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';

const sunriseImage = require('../img/sunrise.jpg');
//https://pixabay.com/photos/park-rabbits-sunset-forest-animals-7913450/

const styles = StyleSheet.create({
  text: {
    color: '#fcf8ee',
    fontSize: 22,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Shadow color
    textShadowOffset: {width: -1, height: 1}, // Shadow offset
    textShadowRadius: 10, // Shadow blur radius
  },
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    backgroundColor: '#642935',
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dc7426',
    borderRadius: 7,
    width: 200,
    margin: 20,
  },
  buttonText: {
    color: '#fcf8ee',
    fontSize: 22,
  },
});

function WinScreen({navigation, route}) {
    // Extract the current ID from the route params
    const { id } = route.params;

    // Find the text object with the matching ID
    const winText = texts.find((text) => text.id === id);

  return (

    <View style={styles.container}>
        <Image source={sunriseImage} style={styles.backgroundImage} />
            <SafeAreaView style={styles.buttonContainer}>
                <View>
                    <Text style={styles.text} >{winText ? winText.text : 'Text not found'}</Text>
                </View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('home')}>
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
            </SafeAreaView>
    </View>

  );
}
  
  export default WinScreen;