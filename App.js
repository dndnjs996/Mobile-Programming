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
                  <Button title="CHANGE FLEX DIRECTION"/>
                  <Button title="CHANGE JUSTIFY CONTENT"/>
                  <Button title="CHANGE ALIGN ITEMS"/>
                  <Button title="CHANGE DIRECTION"/>
                  <Button title="CHANGE FLEX WRAP"/>
                  <Button title="ADD SQUARE"/>
                  <Button title="DELETE SQUARE"/>
                
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