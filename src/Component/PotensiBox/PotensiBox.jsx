import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ITsunami } from '../../Assets'
import { GlobalConsumer } from '../Context/Context'


class PotensiBox extends Component {
    render() {
        let tanggal = this.props.state.potensiTsunami.Tanggal[0]
        let jam = this.props.state.potensiTsunami.Jam[0]
        let lokasi = `${this.props.state.potensiTsunami.Lintang[0]} - ${this.props.state.potensiTsunami.Bujur[0]}`
        let magnitude = this.props.state.potensiTsunami.Magnitude[0]
        let kedalaman = this.props.state.potensiTsunami.Kedalaman[0]
        let area = this.props.state.potensiTsunami.Area[0]
        return (
            <View style={styles.border2}>
                <View style={styles.tsunami}><ITsunami width={87} height={87} fill={"#000"}/></View>
                <View style={styles.container3}>
                    <Text style={styles.textTgl}>{tanggal}-{jam}</Text>
                    <View style={styles.container4}>
                        <Icon name='md-pin' size={16} style={styles.icon} color="#FFAB04"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Lokasi : {lokasi} </Text>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Icon name='ios-pulse' size={16} style={styles.icon} color="red"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Magnitudo : {magnitude} </Text>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Icon name='md-wifi' size={16} style={styles.icon, {transform: [{ rotate: "180deg" }]}} color="green"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Kedalaman : {kedalaman} </Text>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <Icon name='md-radio-button-on' size={16} style={styles.icon} color="red"/>
                        <View style={styles.container5}>
                            <Text style={styles.textGempa}>Area : {area} </Text>
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
    tsunami:{
        margin:10,
        borderRadius:15,
        height:90,
        width:90
    },
    icon:{
        marginTop:2,
    },
})

export default GlobalConsumer(PotensiBox)
