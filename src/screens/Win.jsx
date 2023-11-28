import texts from "../utils/texts";
import React from 'react';
import { View, Text } from 'react-native';

function WinScreen({ route }) {
    // Extract the current ID from the route params
    const { id } = route.params;
  
    // Find the text object with the matching ID
    const deathText = texts.find((text) => text.id === id);
  
    return (
      <View>
        <Text>{deathText ? deathText.text : 'Text not found'}</Text>
        {/* You can display other information from the deathText object as needed */}
      </View>
    );
  }
  
  export default WinScreen;