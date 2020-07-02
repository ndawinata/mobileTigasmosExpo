import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import AboutPage from '../../../Pages/About/About';

const AboutStack = createStackNavigator();

class About extends Component {
    render() {
        return (
            <AboutStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#292B2A',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <AboutStack.Screen
                    name="About"
                    component={AboutPage}
                    options={{ 
                    title: 'About',
                    headerTitle:'About',
                    headerTitleStyle:{fontWeight:"bold",fontFamily:'montserrat', letterSpacing:3},
                    headerTitleAlign:'center', 
                    }}
                />
            </AboutStack.Navigator>
        )
    }
}

export default About
