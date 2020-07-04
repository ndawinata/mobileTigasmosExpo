import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalConsumer } from '../../Context/Context';
import About from '../StackNav/About';
import Home from '../StackNav/Home';
import Notifications from '../StackNav/Notifications';
import Sites from '../StackNav/Sites';
import Weather from '../StackNav/Weather';

const Tab = createMaterialBottomTabNavigator();

function IconWithBadge({ name, badgeCount, color, size, }) {
    return (
        <View style={{ width: 24, height: 24,  }}>
            <Icon name={name} size={size} color={color} />
            {badgeCount > 0 && (
            <View
                style={{
                // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                    position: 'absolute',
                    right: -6,
                    top: -5,
                    backgroundColor: '#f44336',
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
            </Text>
            </View>
        )}
        </View>
    );
}
function HomeIconWithBadge(props) {
    return <IconWithBadge {...props} badgeCount={props.value} />;
}

class TabNav extends Component {
    render() {
        return (
            <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            >
                <Tab.Screen
                name="Home"
                component={Home}
                listeners={()=>({
                    tabPress:this.props.dispatch({type:'home_color'})
                })}
                options={{
                    tabBarColor: '#010101',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        iconName = focused ? 'md-home' : 'md-home';
                    return <Icon name={iconName} size={26} color={color} />;
                    },
                }}
                />
                <Tab.Screen
                name="Sites"
                component={Sites}
                listeners={()=>({
                    tabPress:this.props.dispatch({type:'sites_color'})
                        
                })}
                options={{
                    tabBarColor: '#162447',
                    tabBarLabel: 'Sites',
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        iconName = focused ? 'ios-aperture' : 'md-aperture';
                    return <Icon name={iconName} size={26} color={color} />;
                    },
                }}
                />
                <Tab.Screen
                name="Notification"
                component={Notifications}
                listeners={()=>({
                    tabPress:this.props.dispatch({type:'notif_color'})
                })}
                options={{
                    tabBarColor: '#1f4068',
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        iconName = focused ? 'md-notifications' : 'md-notifications-outline';
                    return <HomeIconWithBadge name={iconName} size={26} color={color} value={this.props.state.badge}/>;
                    },
                }}
                />
                <Tab.Screen
                name="Weather"
                component={Weather}
                listeners={()=>({
                    tabPress:this.props.dispatch({type:'weather_color'})
                })}
                options={{
                    tabBarColor: '#393e46',
                    tabBarLabel: 'Weather',
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        iconName = focused ? 'md-cloud' : 'md-cloud-outline';
                    return <Icon name={iconName} size={26} color={color} />;
                    },
                }}
                />
                <Tab.Screen
                name="About"
                component={About}
                listeners={()=>({
                    tabPress:this.props.dispatch({type:'about_color'})
                })}
                options={{
                    tabBarColor: '#292B2A',
                    tabBarLabel: 'About',
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        iconName = focused ? 'md-information-circle' : 'md-information-circle-outline';
                    return <Icon name={iconName} size={26} color={color} />;
                    },
                }}
                />
        </Tab.Navigator>
        )
    }
}

export default GlobalConsumer(TabNav)
