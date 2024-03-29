import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const fireImage = require('../img/fire.jpg'); //https://www.pexels.com/photo/flames-on-black-background-9667082/

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
        fontSize: 22,
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
                onPress={() => navigation.navigate('start')}
              >
                <Text style={styles.buttonText}>Start</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('about')}
              >
                <Text style={styles.buttonText}>Go to About</Text>
              </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
      </MainLayout>
    );
  }
  
  export default Home;
