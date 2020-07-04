import React, { useState } from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BGUtama } from '../../Assets';
import {Picker} from '@react-native-community/picker';
import { GlobalConsumer } from '../../Component/Context/Context';
import Maps from '../../Component/Maps/Maps';
import montserratbold from '../../Assets/fonts/montserratbold.ttf';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import SitesBox from '../../Component/SitesBox/SitesBox';
import Chart from '../../Component/Chart.js/Chart';

const Sites = (props) =>{
    const [chartSite, setChartSite] = useState('site1')
    const [chartSensor, setChartSensor] = useState('ultrasonik')
    const [fontLoaded] = useFonts({
        montserratbold
    })
    if(!fontLoaded){
        return <AppLoading/>
    }else{
        return(
                <ImageBackground source={BGUtama} style={{flex:1}}>
                    <View style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Maps />
                            <View style={styles.container7}>
                                <Text style={{marginLeft:15, fontFamily:'montserratbold'}}>Monitoring Site</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <View style={{flexDirection:'row', paddingHorizontal:10}}>
                                        <SitesBox name='Site 1' sensor1={props.state.site1[props.state.site1.length-1].pasut_sensor_ultrasonik} sensor2={props.state.site1[props.state.site1.length-1].pasut_sensor_tekanan}/>
                                        <SitesBox name='Site 2' sensor1={props.state.site2[props.state.site2.length-1].pasut_sensor_ultrasonik} sensor2={props.state.site2[props.state.site2.length-1].pasut_sensor_tekanan}/>
                                        <SitesBox name='Site 3' sensor1={props.state.site3[props.state.site3.length-1].pasut_sensor_ultrasonik} sensor2={props.state.site3[props.state.site3.length-1].pasut_sensor_tekanan}/>
                                    </View>
                                </ScrollView>
                                <Text style={styles.text3}>Sensor 1 : Sensor Ultrasonik</Text>
                                <Text style={styles.text3}>Sensor 2 : Sensor Tekanan</Text>
                            </View>                        
                            <View style={styles.container1}>
                                <Text style={styles.textHead}>Realtime Chart</Text>
                                <Chart data={props.state.arrDataChart} />
                                <View style={styles.container2}>
                                    <Picker
                                        selectedValue={chartSite}
                                        style={{width:120}}
                                        onValueChange={(itemValue, itemIndex) =>{
                                            props.dispatch({type:`chart_${itemValue}`})
                                            setChartSite(itemValue)
                                        }}>
                                        <Picker.Item label="Site 1" value="site1" />
                                        <Picker.Item label="Site 2" value="site2" />
                                        <Picker.Item label="Site 3" value="site3" />
                                    </Picker> 
                                    <Picker
                                        selectedValue={chartSensor}
                                        style={{width:150}}
                                        onValueChange={(itemValue, itemIndex) =>{
                                            props.dispatch({type:`chart_sensor_${itemValue}`})
                                            setChartSensor(itemValue)
                                        }}>
                                        <Picker.Item label="Sensor 1" value="ultrasonik" />
                                        <Picker.Item label="Sensor 2" value="tekanan" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.container3}>
                                <View style={{backgroundColor: "#162447"}}>
                                    <Button color="#fff" title="Data Tabel" onPress={()=>props.navigation.navigate('Tabel')} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // marginHorizontal:15
    },
    container1:{
        marginTop:15,
        paddingHorizontal:15,
    },
    container2:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        // marginBottom:25
    },
    container3:{
        marginVertical:15,
        // marginBottom:20,
        // paddingHorizontal:15
    },
    container4:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        marginTop:10
    },
    container5:{
        marginTop:10,
        marginBottom:20,
        borderRadius:15,
        alignItems:'center'
    },
    container6:{
        marginLeft:38,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        marginTop:10
    },
    container7:{
        marginTop:15,
        // paddingHorizontal:15
    },
    box2:{
        marginVertical:10,
        borderWidth:2,
        borderRadius:15,
        borderColor:'rgba(59,59,59,0.38)',
        height:150,
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
    textHead:{
        fontFamily:'montserratbold'
    },
    text3:{
        fontSize:11,
        color:'grey',
        marginLeft:15
    },
    chart:{
        // width:350,
        height:118
    },
    map:{
        // width:400,
        flex:1,
        height:150,
        borderRadius:15,
    }
})
export default GlobalConsumer(Sites)
