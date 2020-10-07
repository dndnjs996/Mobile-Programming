import React, {useState} from 'react';
import {Image, Text, Button, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
    return(
        <>
          <View style={{paddingTop: Constants.statusBarHeight}} />
          <View style={[styles.container, styles.playingSpace]}>
<Text>대중음악 딴따라라 폄하, 대표적인 차별 문제 
    미국 밥딜런은 노벨상도.. 우리는 왜 차별하나?
    대중문화도 문화예술, 시대에 맞게 포함시켜야
    면제가 아니라 국위선양을 위한 대체복무방식
</Text>
<Image
    style={{
        width: 300,
        height: 300,
        resizeMode:'contain'
    }}
    source={{uri:'https://www.google.com/search?q=image&sxsrf=ALeKk01QLo5SOx10yq5NRsKz6t_yG5ltpw:1602036862742&tbm=isch&source=iu&ictx=1&fir=RkjAFRQNR5bUxM%252CQooZsUX3wOLfLM%252C_&vet=1&usg=AI4_-kRX1Clu3WTNaw9UWm15PKXxL5w3eQ&sa=X&ved=2ahUKEwj0pvuwtKHsAhXJEqYKHakCA_UQ9QF6BAgKEFw#imgrc=RkjAFRQNR5bUxM'
}}
/>
    


          </View>
          <ScrollView style={[styles.container]}>
              <View style={[styles.controlSpace]}>
                  <View style={styles.buttonView}>

            
                  <Button title="CHANGE FLEX DIRECTION"/>
                  </View>
                  <View style={styles.buttonView}>
                  <Button title="CHANGE JUSTIFY CONTENT"/>
                  </View>
                  <View style={styles.buttonView}>
                  <Button title="CHANGE ALIGN ITEMS"/>
                  </View>
                  <View style={styles.buttonView}>
                  <Button title="CHANGE DIRECTION"/>
                  </View>
                  <View style={styles.buttonView}>
                  <Button title="CHANGE FLEX WRAP"/>
                  </View>
                  <View style={styles.buttonView}>
                  <Button title="ADD SQUARE"/>
                  </View>
                  <View style={styles.buttonView}>
                  <Button title="DELETE SQUARE"/>
                  </View>
                
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