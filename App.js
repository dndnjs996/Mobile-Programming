import React, {useState} from 'react';
import {Image, Text, Button, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight}} />
      <View style={[styles.container, styles.playingSpace]}>
        

      </View>
      
      <ScrollView style={[styles.container]}>
        <View style={[styles.controlSpace]}>
          <View style={styles.buttonView}>            
            <Button title="CHANGE FLEX DIRECTION"
            onPress={() => console.log("press 1")

            }
            />
          </View>
          
          <View style={styles.buttonView}>            
            <Button title="CHANGE JUSTIFY CONTENT"
            onPress={() => console.log("press 2")

          }
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS"
            onPress={() => console.log("press 3")

          }
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION"
            onPress={() => console.log("press 4")

          }
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP"
            onPress={() => console.log("press 5")

          }
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="ADD SQUARE"
            onPress={() => console.log("press 6")

          }
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE"
            onPress={() => console.log("press 7")

          }
            />
          </View>
        </View>

      </ScrollView>

    </>

  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',

  },
  buttonView: {
    width: '50%',
    padding: 10,
  }
})

export default App;