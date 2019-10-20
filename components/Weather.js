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
            <View>
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
                            <View style={styles.headerContainer}>
                                <MaterialCommunityIcons size={140} name={weatherConditions[weather].icon} color={'#fff'} />
                                <Text style={styles.tempText}> { Math.round(temperature) } ° </Text>
                            </View>
                            <View style={styles.bodyContainer}>
                                <Text style={styles.title}> { weatherConditions[weather].title } </Text>
                                <Text style={styles.subtitle}> {weatherConditions[weather].subtitle} </Text>
                            </View>
                        </View>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherContainer: {
        width: '100%',
        padding: 20,
        flex: 1,
        backgroundColor: '#f7b733'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});

export default Weather;