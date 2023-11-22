/***  INSTRUCTIONS:

- Black #230007
- White #fcf8ee
- Green #6b9330
- Orange #dc7426
- Purple #642935
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#230007',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainLayout;