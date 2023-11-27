import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import MainLayout from '../layouts/MainLayout';

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
  },
  buttonText: {
    color: '#fcf8ee',
    fontSize: 20,
  },
});

function Death({navigation}) {
  return (

      <View style={styles.container}>
        <Image source={mayhemImage} style={styles.backgroundImage} />
        <SafeAreaView style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>

  );
}

export default Death;