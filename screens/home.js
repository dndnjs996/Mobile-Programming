import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function Home({navigation}) {
    return (
    <>
        <Image
            source={require('../assets/frog-1371919.png')}
            style={{width: 400, height:400}}
        />
        <Button
        title= "Go to Layout"
        onPress={() => navigation.navigate('Layout')}
        />
    </>
    );
}

export default Home