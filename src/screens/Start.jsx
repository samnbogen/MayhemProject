import React, { useState, useEffect } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, ScrollView } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    text: {
        color: '#dc7426', 
        textAlign: 'center',
        fontSize: 22,
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
        fontSize: 22,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
  });

  function Start({navigation}) {
      const [showText, setShowText] = useState([false, false, false, false, false, false, false]);
  
      useEffect(() => {
          const timers = showText.map((_, i) => setTimeout(() => {
              setShowText(prevShowText => {
                  const newShowText = [...prevShowText];
                  newShowText[i] = true;
                  return newShowText;
              });
          }, i * 2200)); 
  
          return () => timers.forEach(timer => clearTimeout(timer)); 
      }, []);
  
      return (
          <MainLayout>
              <ScrollView>
                  <View style={styles.container}>
                      {showText[0] && <Text style={styles.text}>
                        It was great of your friend to book a cabin to spend the long weekend at, it would have been better if they bothered to find one that had internet, or even a television. Luckily you thought to bring a few bottles vodka and your roommates book of spells for a laugh.
                        </Text>}
                      {showText[1] && <Text style={styles.text}>It was just supposed to be a joke.</Text>}
                      {showText[2] && <Text style={styles.text}>
                        Mayhem wasn't supposed to be real, it was supposed to be nothing more than an urban legend. You had laughed when your friends suggested the ritual to summon the spirit of Mayhem. 
                        </Text>}
                      {showText[3] && <Text style={styles.text}>But you aren't laughing now.</Text>}
                      {showText[4] && <Text style={styles.text}>
                        Not with the head of your friend rolls across the floor, your weekend officially ruined. Mayhem's eyes burn bright from across the room as if they were small portals giving you a glimpse of hell itself. The legends say it has the night to kill all those who summoned it, creating as much mayhem as it can.
                        </Text>}
                      {showText[5] && <Text style={styles.text}>
                        Will you be able to escape or will <Text style={styles.mayhem}>MAYHEM</Text> find you?
                        </Text>}
                      {showText[6] && <Text style={styles.text}>The choice is yours...</Text>}
  
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
  