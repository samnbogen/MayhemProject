import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

function MainComponent({
    text,
    btnLeft,
    btnRight,
    setOption,
    idLeft,
    idRight,
    image,
    alt,
})

{
    const [isPresent, setIsPresent] = useState(false);

    const handlePress = () => {
        setIsPresent(!isPresent);
      
    };

    const buttonLeftTitle = btnLeft && typeof btnLeft === 'string' ? btnLeft : '';
  const buttonRightTitle = btnRight && typeof btnRight === 'string' ? btnRight : '';
    

    return (
        <View style={styles.body}>
            <View >
                <View style={styles.chapterDescription}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>

            <View style={styles.chapterImage}>
                <Image source={image} alt={alt} />
            </View>

            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.button} onPress={() => {setOption(idLeft); handlePress();}}>
                    <Text style={styles.buttonText}>{buttonLeftTitle}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOption(idRight)}>
                    <Text style={styles.buttonText}>{buttonRightTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    body:{
        backgroundColor: '#230007',
        fontFamily: 'Montserrat, sans-serif',
        flex: 1,
    },


    chapter: {
        borderWidth: 2,
        borderColor: '#dc7426',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#230007',
        flexDirection: 'row',
        color: '#fcf8ee',
        textAlign: "center",
    },

    text: {
        fontSize: 30,
        textAlign: "center",
        color: '#fff',
    },

    chapterDescription: {
        flexGrow: 8,
        fontSize: 40,
        color: '#fff',
        textAlign: "center",
    },

    chapterNumber: {
        flex:1,
        fontSize: 40,
    },

    chapterImage: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#230007',
        textAlign: "center",
        width: 'auto',
        height: 'auto',
        alignSelf: "center",

    },

    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    groupButton: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#230007",
        
    },
    button:{
        backgroundColor: '#230007',
        borderWidth: 2,
        borderColor: '#dc7426',
        fontFamily: 'Roboto, sans-serif',
        fontSize: 0,
        padding: 10,
        margin: 15,
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'center',
    },
    
      buttonText: {
        color: '#fcf8ee',
        fontFamily: 'Roboto, sans-serif',
        fontSize: 30,
        padding: 10,
      },




});


export default MainComponent;