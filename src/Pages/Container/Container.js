import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'
// import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalConsumer } from '../../Component/Context/Context';
import { TabNav } from '../../Component';

class Container extends Component {
    render() {
        return (
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor={this.props.state.statusBarColor} />
                <TabNav />
            </NavigationContainer>
        )
    }
}

export default GlobalConsumer(Container)

