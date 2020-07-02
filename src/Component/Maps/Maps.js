import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GlobalConsumer } from '../Context/Context';

const PinMap = (props) => {
    return(
        <Marker coordinate={props.coor}>
            <Callout alphaHitTest={true}>
                <Text style={styles.textHeadCallout}>{props.name}</Text>
                <Text style={styles.textMuted}>{props.lokasi.latitude}, {props.lokasi.longitude}</Text>
                <Text style={styles.textCallout}>Nilai Pasut:</Text>
                <Text style={styles.textCallout}>Sensor 1 : {props.sensor1} meter</Text>
                <Text style={styles.textCallout}>Sensor 2 : {props.sensor2} meter</Text>
            </Callout>
        </Marker>
    )
}

class Maps extends Component {

    state={
        lokasi:{
            site1:{
                latitude: -5.875753, 
                longitude: 106.041064
            },
            site2:{
                latitude: -6.010488, 
                longitude: 106.535115
            },
            site3:{
                latitude: -5.919556, 
                longitude: 107.008606
            }
        }
    }



    render() {
        return (
            <View>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: this.props.state.deltaMaps[0].centerlat,
                    longitude: this.props.state.deltaMaps[0].centerlon,
                    latitudeDelta: this.props.state.deltaMaps[0].latitude,
                    longitudeDelta: this.props.state.deltaMaps[0].longitude,
                }}
                >
                    <PinMap 
                        coor={this.props.state.lokasiSite[0]} 
                        name="Site 1" 
                        lokasi={this.props.state.lokasiSite[0]}
                        sensor1={this.props.state.site1[this.props.state.site1.length-1].pasut_sensor_ultrasonik} 
                        sensor2={this.props.state.site1[this.props.state.site1.length-1].pasut_sensor_tekanan}
                    />
                    <PinMap 
                        coor={this.props.state.lokasiSite[1]} 
                        name="Site 2" 
                        lokasi={this.props.state.lokasiSite[1]}
                        sensor1={this.props.state.site2[this.props.state.site2.length-1].pasut_sensor_ultrasonik} 
                        sensor2={this.props.state.site2[this.props.state.site2.length-1].pasut_sensor_tekanan}
                    />
                    <PinMap 
                        coor={this.props.state.lokasiSite[2]} 
                        name="Site 3" 
                        lokasi={this.props.state.lokasiSite[2]}
                        sensor1={this.props.state.site3[this.props.state.site3.length-1].pasut_sensor_ultrasonik} 
                        sensor2={this.props.state.site3[this.props.state.site3.length-1].pasut_sensor_tekanan}
                    />
                </MapView>
                <View style={styles.header}>
                    <Text style={styles.textHead}>Tide Gauge Maps</Text>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    header:{ 
        position: 'absolute', 
        top: 8, 
        left: 15, 
        backgroundColor:'rgba(0,0,0,0.13)',
        paddingVertical:5, 
        paddingHorizontal:10, 
        borderRadius:15, 
        justifyContent: 'flex-end',
        alignItems: 'center',
    },      
    map: {
        height: 260,
        flex:1,
    },
    textHead:{
        fontFamily:'montserratbold'
    },
    textHeadCallout:{
        fontSize:12,
        fontWeight:'bold'
    },
    textCallout:{
        fontSize:11,
    },
    textMuted:{
        fontSize:9,
        color:'grey',
    }
});

export default GlobalConsumer(Maps)
