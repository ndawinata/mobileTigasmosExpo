import React, { Component } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BGUtama } from '../../Assets'
import { GlobalConsumer } from '../../Component/Context/Context'
import montserratbold from '../../Assets/fonts/montserratbold.ttf';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import SitesBox from '../../Component/SitesBox/SitesBox';
import GempaBox from '../../Component/GempaBox/GempaBox';
import PotensiBox from '../../Component/PotensiBox/PotensiBox';
import CuacaHome from '../../Component/CuacaHome/CuacaHome';

let customFonts = {
    montserratbold,
};

class Home extends Component {
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
                <ImageBackground source={BGUtama} style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                            <CuacaHome />
                            <View style={styles.shadow} />
                            <View style={styles.container1}>
                                <Text style={styles.heading1}>Tide Gauge</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                <View style={{flexDirection:'row', paddingLeft:10}}>
                                    <SitesBox name='Site 1' sensor1={this.props.state.site1[this.props.state.site1.length-1].pasut_sensor_ultrasonik} sensor2={this.props.state.site1[this.props.state.site1.length-1].pasut_sensor_tekanan}/>
                                    <SitesBox name='Site 2' sensor1={this.props.state.site2[this.props.state.site2.length-1].pasut_sensor_ultrasonik} sensor2={this.props.state.site2[this.props.state.site2.length-1].pasut_sensor_tekanan}/>
                                    <SitesBox name='Site 3' sensor1={this.props.state.site3[this.props.state.site3.length-1].pasut_sensor_ultrasonik} sensor2={this.props.state.site3[this.props.state.site3.length-1].pasut_sensor_tekanan}/>
                                </View>
                                </ScrollView>  
                                <Text style={styles.text3}>Sensor 1 : Sensor Ultrasonik</Text>
                                <Text style={styles.text3}>Sensor 2 : Sensor Tekanan</Text>                          
                            </View>
                            <View style={styles.container}>
                                <View style={styles.container2}>
                                    <Text style={styles.heading}>Gempa Terkini</Text>
                                    <GempaBox />
                                </View>
                                <View style={styles.container2}>
                                    <Text style={styles.heading}>Tsunami Terkini</Text>
                                    <PotensiBox />
                                </View>
                            </View>
                    </ScrollView>
                </ImageBackground>
            )
        } else{
            return <AppLoading />
        }
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
        paddingBottom:15
    },
    container1:{
        // marginHorizontal:15,
        marginTop:15,
        marginBottom:5
    },
    container2:{
        marginVertical:5
    },
    heading:{
        fontFamily:'montserratbold'
    },
    heading1:{
        fontFamily:'montserratbold',
        marginLeft:15
    },
    text3:{
        fontSize:11,
        color:'grey',
        marginLeft:15
    },
    shadow:{
        backgroundColor:'rgba(0,0,0,.4)',
        flex:1,
        height:1.5,
    },
})

export default GlobalConsumer(Home)
