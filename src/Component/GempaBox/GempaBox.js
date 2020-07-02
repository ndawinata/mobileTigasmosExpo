import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalConsumer } from '../Context/Context'
import moment from "moment"

class GempaBox extends Component {
    
    render() {
        let tanggal = this.props.state.gempaTerkini.Tanggal[0]
        let mangnitude = this.props.state.gempaTerkini.Magnitude[0]
        let kedalaman = this.props.state.gempaTerkini.Kedalaman[0]
        let lokasi = this.props.state.gempaTerkini.Posisi[0]
        let pusat = this.props.state.gempaTerkini.Keterangan[0]

        return (
            <View style={styles.border2}>
                <Image source={{uri:'https://data.bmkg.go.id/eqmap.gif'}} style={styles.eqmap}/>
                <View style={styles.container3}>
                    <Text style={styles.textTgl}>{tanggal}</Text>
                    <View style={styles.container4}>
                        <Icon name='ios-pulse' size={16} style={styles.icon} color="red"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Magnitudo : {mangnitude} </Text>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Icon name='md-wifi' size={16} style={styles.icon, {transform: [{ rotate: "180deg" }]}} color="green"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Kedalaman : {kedalaman}</Text>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Icon name='md-pin' size={16} style={styles.icon} color="#FFAB04"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Lokasi : {lokasi} </Text>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Icon name='md-radio-button-on' size={16} style={styles.icon} color="red"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>{pusat}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container3:{
        marginLeft:3,
        justifyContent:'space-around',
    },
    container4:{
        flexDirection:'row',
    },
    container5:{
        paddingHorizontal:1, 
        width:185,
    },
    border2:{
        padding:2,
        flex:1,
        flexDirection:'row',
        marginVertical:10,
        borderWidth:2,
        borderRadius:15,
        borderColor:'rgba(59,59,59,0.38)',
        alignItems:'center',
    },
    textGempa:{
        marginLeft:10,
        fontSize:11,
        marginVertical:2,
        textAlign:'justify'    
    },
    textTgl:{
        fontWeight:'bold',
        fontSize:12
    },
    eqmap:{
        margin:5,
        borderRadius:15,
        height:100,
        width:100,
        overlayColor:'rgba(255,255,255,1)',
    },
    icon:{
        marginTop:2,
    },
})

export default GlobalConsumer(GempaBox)
