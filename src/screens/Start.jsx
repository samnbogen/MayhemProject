import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    text: {
        color: '#dc7426', 
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'fantasy',
        paddingBottom: 10,
    },
    mayhem: {
        color: '#E1341E',
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
  });

function Start({navigation}) {
    return (
        <MainLayout>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.text}>You find yourself in the woods, waking up with no recollection of how you got there.</Text>
                    <Text style={styles.text}> The air is cold and silent, and you can't see anything but trees around you.</Text>
                    <Text style={styles.text}>Your objectives are clear: find a way out of the woods, and find out what happened to you.</Text>
                    <Text style={styles.text}>Will you be able to escape or will <Text style={styles.mayhem}>MAYHEM</Text> find you?</Text>
                    <Text style={styles.text}>The choice is yours...</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('game')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
                </View>

            </SafeAreaView>
        </MainLayout>
    );
}

export default Start;