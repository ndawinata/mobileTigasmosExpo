import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import NotifPage from '../../../Pages/Notifications/Notifications';

const NotifStack = createStackNavigator();

class Notifications extends Component {
    render() {
        return (
            <NotifStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#1f4068',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <NotifStack.Screen
                    name="Notification"
                    component={NotifPage}
                    options={{ 
                    title: 'Notification',
                    headerTitle:'Notification',
                    headerTitleStyle:{fontWeight:"bold", letterSpacing:3},
                    headerTitleAlign:'center',
                    }}
                />
            </NotifStack.Navigator>
        )
    }
}

export default Notifications
