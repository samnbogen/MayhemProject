import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, StyleSheet, ScrollView } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    text: {
        color: '#dc7426', 
        textAlign: 'center',
        fontSize: 20,
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
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        It was great of your friend to book a cabin to spend the long weekend at, it would have been better if they bothered to find one that had internet, or even a television. Luckily you thought to bring a few bottles vodka and your roommates book of spells for a laugh. 
                    </Text>
                    <Text style={styles.text}>
                        It was just supposed to be a joke. 
                    </Text>
                    <Text style={styles.text}>
                        Mayhem wasn't supposed to be real, it was supposed to be nothing more than an urban legend. You had laughed when your friends suggested the ritual to summon the spirit of Mayhem. 
                    </Text>
                    <Text style={styles.text}>
                        But you aren't laughing now. 
                    </Text>
                    <Text style={styles.text}>
                        Not with the head of your friend rolls across the floor, your weekend officially ruined. Mayhem's eyes burn bright from across the room as if they were small portals giving you a glimpse of hell itself. The legends say it has the night to kill all those who summoned it.
                    </Text>
                    <Text style={styles.text}>
                        Will you be able to escape or will <Text style={styles.mayhem}>MAYHEM</Text> find you?
                    </Text>
                    <Text style={styles.text}>
                        The choice is yours...
                    </Text>
                

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('game')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>  
                </View>              

            </ScrollView>
        </MainLayout>
    );
}

export default Start;