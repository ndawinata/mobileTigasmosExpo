import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/Fontisto'
import { GlobalConsumer } from '../../Component/Context/Context'
import { BGWeather } from '../../Assets'

class Weather extends Component {

    componentDidMount(){
        // this.props.dispatch({type:'weather_color'})
    }

    render() {
        return (
            <ImageBackground source={BGWeather} style={{flex:1, resizeMode:'cover', justifyContent:"center"}}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container1}>
                        <Text style={styles.text}> {this.props.state.wCurrent.weather_descriptions} </Text>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Icon4 name="thermometer-three-quarters" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.temperature}&deg;C</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon name="ios-water" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.humidity}%</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon1 name="wind" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.wind_speed}</Text>
                                <Text style={styles.text3}>km/jam</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon name="ios-navigate" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.wind_dir}</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Icon2 name="compass" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.wind_degree}&deg;</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon3 name="speedometer" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.pressure}</Text>
                                <Text style={styles.text3}>mBar</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon name="md-rainy" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.precip}</Text>
                                <Text style={styles.text3}>mm</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon name="ios-eye" size={35} color="#EEDF0D" />
                                <Text style={styles.text2}>{this.props.state.wCurrent.visibility}</Text>
                                <Text style={styles.text3}>km</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="md-pin" size={18} color="#fff" />
                            <Text style={styles.text4}>{this.props.state.wLocation.name}, {this.props.state.wLocation.region}, {this.props.state.wLocation.country}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0)',
        flex:1
    },
    container1:{
        backgroundColor:'rgba(0,0,0,0.25)',
        height:300,
        // width:320,
        marginHorizontal:30,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'space-around',
        padding:15
    },
    container2:{
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    container3:{
        alignItems:'center', 
        flex:1,
        justifyContent:'center',
    },
    text:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    text1:{
        color:'#fff',
        fontSize:12
    },
    text2:{
        color:'#fff', 
        fontSize:16, 
        fontWeight:'bold'
    },
    text3:{
        marginLeft:8, 
        color:'#fff', 
        fontSize:12, 
        fontWeight:'bold'
    },
    text4:{
        marginLeft:8, 
        color:'#fff',
        fontSize:13, 
    }
})
export default GlobalConsumer(Weather)
