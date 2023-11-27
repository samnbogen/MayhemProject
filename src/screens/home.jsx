import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
    },
    button: {
        backgroundColor: '#642935',
        padding: 10,
        alignItems: 'center',
        borderWidth: 2, // Width of the border
        borderColor: '#dc7426', // Color of the border
        borderRadius: 7, // Radius of the border corners
    },
    buttonText: {
        color: '#fcf8ee', 
        fontSize: 20,
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
        </SafeAreaView>
      </MainLayout>
    );
  }
  
  export default Home;
