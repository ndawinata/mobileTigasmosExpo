import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import SitesPage from '../../../Pages/Sites/Sites';
import TabelPage from '../../../Pages/TabelPage/TabelPage';
// import HomePage from '../../../Pages/Home/Home';

const SitesStack = createStackNavigator();

class Sites extends Component {
    render() {
        return (
            <SitesStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#162447',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <SitesStack.Screen
                    name="Sites"
                    component={SitesPage}
                    options={{ 
                    title: 'Sites',
                    headerTitle:'Sites',
                    headerTitleStyle:{fontWeight:"bold", letterSpacing:3},
                    headerTitleAlign:'center', 
                    }}
                />
                <SitesStack.Screen
                    name="Tabel"
                    component={TabelPage}
                    options={{ 
                    title: 'Tide Gauge Data',
                    headerTitle:'Tide Gauge Data',
                    headerTitleStyle:{fontWeight:"bold", letterSpacing:2},
                    headerTitleAlign:'center', 
                    }}
                />
            </SitesStack.Navigator>
        )
    }
}

export default Sites
