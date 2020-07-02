import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { BGHome2 } from '../../Assets'
import { GlobalConsumer } from '../Context/Context'
import montserratregular from '../../Assets/fonts/montserratregular.ttf';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
    montserratregular,
};

class CuacaHome extends Component {
    state = {
        fontsLoaded:false,
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (this.state.fontsLoaded){
            return (
                <View style={styles.container}>
                    <ImageBackground source={BGHome2} style={styles.background}>
                        <Text style={styles.text1}>{this.props.state.wCurrent.temperature}&deg;C</Text>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Icon name="ios-water" size={15} color="#EEDF0D" />
                                <Text style={styles.text3}>{this.props.state.wCurrent.humidity}%</Text>
                            </View>
                            <View style={styles.container3}>
                                <Icon1 name="wind" size={15} color="#EEDF0D" />
                                <Text style={styles.text3}>{this.props.state.wCurrent.wind_speed}</Text>
                                <Text style={styles.text3}>km/jam</Text>                        
                            </View>
                            <View style={styles.container3}>
                                <Icon3 name="speedometer" size={15} color="#EEDF0D" />
                                <Text style={styles.text3}>{this.props.state.wCurrent.pressure}</Text>
                                <Text style={styles.text3}>mBar</Text>                        
                            </View>
                            <View style={styles.container3}>
                                <Icon name="md-rainy" size={15} color="#EEDF0D" />
                                <Text style={styles.text3}>{this.props.state.wCurrent.precip} mm</Text>
                            </View>
                        </View>
                        <Text style={styles.text2}> {this.props.state.wCurrent.weather_descriptions} </Text>
                        <View style={styles.container1}>
                            <Icon name="md-pin" size={18} color="#fff" />
                            <Text style={styles.text4}>{this.props.state.wLocation.name}, {this.props.state.wLocation.region}, {this.props.state.wLocation.country}</Text>
                        </View>
                    </ImageBackground>
                </View>
            )
        }else{
            return <AppLoading />
        }
    }
}

const styles = StyleSheet.create({
    container:{
        height: 190,
        // shadowColor:'black',
        // shadowRadius:10,
        // shadowOpacity:0.1,
        // shadowOffset:{
        //     width:0,
        //     height:-100
        // }
    },
    container1:{
        flexDirection:'row',
        marginVertical:5
    },
    container2:{
        flexDirection:'row',
        marginVertical:5,
        width:220,
        marginHorizontal:30,
        justifyContent:'space-around'
    },
    container3:{
        alignItems:'center', 
        flex:1,
        marginVertical:2
    },
    background:{
        flex:1, 
        overlayColor:'#000', 
        alignItems:'center',
        
    },
    image:{
        width:75, 
        height:75
    },
    text1:{
        marginTop:10,
        color:'#fff', 
        fontSize:36, 
        fontFamily:'montserratregular', 
        fontWeight:'bold'
    },
    text2:{
        fontSize:18, 
        marginLeft:8, 
        color:'#fff',
        fontWeight:'bold'
    },
    text3:{
        fontSize:12, 
        color:'#fff',
    },
    text4:{
        marginLeft:8, 
        color:'#fff',
    },
})

export default GlobalConsumer(CuacaHome)
