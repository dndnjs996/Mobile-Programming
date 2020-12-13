import React from 'react';
import {Text, Alert, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";




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
        this.setState({cond: data.weather[0].main, temp: data.main.temp, temp_max: data.main.temp_max, 
            temp_min: data.main.temp_min, humidity: data.main.humidity, feels_like: data.main.feels_like});

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
        const {cond, temp, temp_max, temp_min, feels_like, humidity} = this.state;
        
        return (
            
            <LinearGradient
            colors={weatherOptions[cond].gradient}
            style={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={256} color="black" />
                    <Text style={styles.temptitle}>현재온도:{temp}℃</Text>
                    
                </View>
                    <Text style={styles.title}>{cond}</Text>
                <View style={styles.halfcontainer}>
                
                <Text style={styles.temp_max}>최고온도:{temp_max}℃</Text>
                    <Text style={styles.temp_min}>최저온도:{temp_min}℃</Text>
                    <Text style={styles.feels_like}>체감온도:{feels_like}℃</Text>
                    <Text style={styles.humidity}>습도:{humidity}%</Text>
                    
                </View>
            
            </View>
            </LinearGradient>
        );
    };
}





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
        fontSize: 38,
    },
    temp_max: {
        fontSize:25
    },
    temp_min:{
        fontSize:25
    },
    feels_like:{
        fontSize:25
    },
    humidity:{
        fontSize:25
    },
    title: {
        fontSize:40,
        
    }
})


