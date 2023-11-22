import React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
  text: {
      color: '#dc7426', 
      textAlign: 'center',
      fontSize: 25,
      fontFamily: 'fantasy',
      paddingBottom: 10,
  },
});

function About() {
  return (
    <MainLayout>
        <View>
            <Text style={styles.text}>Mayhem App</Text>
            <Text style={styles.text}>Created by Lisa K, Markus L, Sam B, Dorian L</Text>
            <Text style={styles.text}> Version 0.0.1</Text>
        </View>
    </MainLayout>
  );
}

export default About;