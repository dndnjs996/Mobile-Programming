import React from 'react';
import {Text, Alert, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';

const apikey = process.env.REACT_APP_WEATHER_KEY;

export default class Weather extends React.Component {

    getWeather = async(latitude, longitude) => {
        const {data } = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
        );
        console.log(data);
        

    }

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude, location.coords.longitude);

            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch(error) {
            Alert.alert("Error", {error})
        }
    };

    

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            <>
            </>
        );
    };

}