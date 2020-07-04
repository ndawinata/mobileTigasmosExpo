import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import HomePage from '../../../Pages/Home/Home';

const HomeStack = createStackNavigator();

class Home extends Component {
    render() {
        return (
            <HomeStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#010101',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <HomeStack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ 
                    title: 'My home',
                    // headerTitle:'TIGASMOS',
                    headerTitle:'TIGASMOS',
                    headerTitleStyle:{fontWeight:"bold", letterSpacing:3,},
                    headerTitleAlign:'center',
                    headerRightContainerStyle:{marginHorizontal:20},
                    // cardOverlayEnabled:false
                    }}
                />
            </HomeStack.Navigator>
        )
    }
}

export default Home
