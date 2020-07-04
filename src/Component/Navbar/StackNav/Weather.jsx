import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import WeatherPage from '../../../Pages/Weather/Weather';

const WeatherStack = createStackNavigator();

class Weather extends Component {
    render() {
        return (
            <WeatherStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#393e46',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <WeatherStack.Screen
                    name="Home"
                    component={WeatherPage}
                    options={{ 
                    title: 'Weather',
                    headerTitle:'Weather',
                    headerTitleStyle:{fontWeight:"bold", letterSpacing:3},
                    headerTitleAlign:'center', 
                    }}
                />
            </WeatherStack.Navigator>
        )
    }
}

export default Weather
