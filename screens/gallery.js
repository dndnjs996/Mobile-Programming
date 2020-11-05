import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function Gallery({navigation}) {
    return (
        <>
          <Image
            source={require('../assets/pexels-anna-tarazevich-5629220.jpg')}
            style={{width: 150, height:150}}
            
        />
         
          <Image
            source={require('../assets/pexels-pixabay-531428.jpg')}
            style={{width: 150, height:150}}
        />

          <Image
            source={require('../assets/pexels-fotografierende-3015379.jpg')}
            style={{width: 150, height:150}}
        />

          
        <Button
        title= "Go to Layout"
        onPress={() => navigation.navigate('Layout')}
        />

        <Button
        title= "Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
    </>
    );
}

export default Gallery