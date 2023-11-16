import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function Home({navigation}) {
    return (
        <MainLayout>
            <SafeAreaView>  
                <Text>Home Screen</Text>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

export default Home;