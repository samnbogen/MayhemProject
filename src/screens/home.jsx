<<<<<<< Updated upstream
import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const fireImage = require('../img/fire.jpg');

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '150%',
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
    text: {
        color: '#dc7426', 
        textAlign: 'center',
        fontSize: 70,
        fontFamily: 'fantasy',
        paddingBottom: 180,
    },
});


function Home({ navigation }) {
    return (
      <MainLayout>
        <SafeAreaView>
            <View style={styles.container}>
            <Image source={fireImage} style={styles.backgroundImage} />
            
          <Text style={styles.text}>Mayhem</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Start')}
            >
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.buttonText}>Go to About</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Death')}
            >
              <Text style={styles.buttonText}>Go to Death</Text>
            </TouchableOpacity>
          </View>
          </View>
        </SafeAreaView>
      </MainLayout>
    );
  }
  
  export default Home;
=======
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Text, Button } from 'react-native';


function Home({navigation}) {
    return (
        <>
            <Text>Home Screen</Text>
            <Button title='Game screen' onPress={() => navigation.navigate('Game')}/>
        </>
        
    );
}

export default Home;
>>>>>>> Stashed changes
