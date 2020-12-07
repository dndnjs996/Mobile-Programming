import React from 'react';
import {Text, Alert, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";



const apikey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }
};

export default class Weather extends React.Component {

    state = {
        cond : "Clear"
    };

    getWeather = async(latitude, longitude) => {
        const {data } = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
        );
        console.log(data);
        console.log(data.main.temp); 
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.weather[0].main);
        this.setState({cond: data.weather[0].main, temp: data.main.temp});

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
        const {cond, temp} = this.state;
        
        return (
            
            <LinearGradient
            colors={weatherOptions[cond].gradient}
            style={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={256} color="black" />
                    <Text style={styles.temptitle}>{temp}℃</Text>
                    
                </View>

                <View style={styles.halfcontainer}>
            
                    <Text style={styles.title}>{cond}</Text>
                </View>
            
            </View>
            </LinearGradient>
        );
    };
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};



const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temptitle: {
        fontSize: 48,
    },
    title: {
        fontSize:60,
        
    }
})


