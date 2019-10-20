import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';
import { WEATHER_API_KEY } from "../config.local";


class Weather extends React.Component {
    state = {
        isLoading: true,
        temperature: 0,
        weather: null,
        error: null,
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error getting weather conditions'
                });
            }
        )
    }

    fetchWeather(lat = 25, lon = 25) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    temperature: json.main.temp,
                    weather: json.weather[0].main,
                    isLoading: false
                });
            })
    }

    render() {
        const {weather, temperature, isLoading} = this.state;
        return (
            <View style={
                {
                    width: '100%',
                    height: '100%'
                }
            }>
                { isLoading
                    ? (
                        <Text>TODO: Add a loader</Text>
                    )
                    : (
                        <View style={
                            [
                                styles.weatherContainer,
                                {
                                    backgroundColor: weatherConditions[weather].color
                                },
                            ]
                        }>
                                <MaterialCommunityIcons size={72} name={weatherConditions[weather].icon} color={'#fff'} />
                                <Text style={styles.tempText}> { Math.round(temperature) } ° </Text>
                                <Text style={styles.title}> { weatherConditions[weather].title } </Text>
                        </View>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f7b733',
        padding: 20,
    },
    tempText: {
        fontSize: 32,
        color: '#fff'
    },
    title: {
        fontSize: 32,
        color: '#fff'
    }
});

export default Weather;