import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
    return(
        <>
          <View style={{ paddingTop: Constants.statusBarHeight}} />
          <View style={[styles.container, styles.playingSpace]}>


          </View>
          <ScrollView>

          </ScrollView>

        </>

    );

};

const styles = StyleSheet.create({
    container : {
        height: '50%',
    },
    playingSpace: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 3,
    },
})
export default App;