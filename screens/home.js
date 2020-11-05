import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function Home({navigation}) {
    return (
    <>
        <Image
            source={require('../assets/pexels-tomas-anunziata-695241.jpg')}
            style={{width: 450, height:500}}
        />
        <Button
        title= "Go to Layout"
        onPress={() => navigation.navigate('Layout')}
        />
        <Button
        title= "Go to Gallery"
        onPress={() => navigation.navigate('Gallery')}
        />
    </>
    );
}

export default Home