import React, { Component } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BGUtama } from '../../Assets'
import { CuacaHome, GempaBox, PotensiBox, SitesBox } from '../../Component'
import { GlobalConsumer } from '../../Component/Context/Context'

class Home extends Component {
    
    componentDidMount(){
        // this.props.dispatch({type:'home_color'})
    }
    render() {
        return (
            <ImageBackground source={BGUtama} style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <CuacaHome/>
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
