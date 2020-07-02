import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { IRuller } from '../../Assets'
import montserratbold from '../../Assets/fonts/montserratbold.ttf';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
    montserratbold,
};

class SitesBox extends Component {
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
                <View style={styles.container2}>
                    <View style={styles.box1}>
                        <View style={styles.container3}>
                            <View style={styles.circle}>
                                <IRuller width={45} height={45} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text1}>{this.props.name}</Text>
                            <Text style={styles.text2}>Sensor 1 : {this.props.sensor1} m</Text>
                            <Text style={styles.text2}>Sensor 2 : {this.props.sensor2} m</Text>
                        </View>                                    
                    </View>
                </View>
            )
        } else {
            return <AppLoading />
        }
    }
}

const styles = StyleSheet.create({
    container2:{
        marginVertical:10,
        flexDirection:'row',
        paddingHorizontal:5,
    },
    container3:{
        marginRight:10,
        flexDirection:'row',
    },
    box1:{
        flexDirection:'row',
        borderWidth:2,
        borderRadius:15,
        borderColor:'rgba(59,59,59,0.38)',
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center'
    },
    textHead:{
        fontFamily:'montserratbold'
    },
    text1:{
        fontWeight:'bold',
    },
    text2:{
        fontSize:12
    },
    circle:{
        backgroundColor:'#162447',
        padding:8,
        borderRadius:34,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default SitesBox
