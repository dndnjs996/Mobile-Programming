import React, {useState} from 'react';
import {Button, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
    return(
        <>
          <View style={{ paddingTop: Constants.statusBarHeight}} />
          <View style={[styles.container, styles.playingSpace]}>


          </View>
          <ScrollView>
              <View>
                  <Button title="1"/>
                  <Button title="2"/>
                  <Button title="3"/>
                  <Button title="4"/>
                  <Button title="5"/>
                  <Button title="6"/>
                  <Button title="7"/>
              </View>

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