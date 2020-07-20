import React, { Component } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { BGAbout, ILogo, IMask, IMask1, IMask2 } from '../../Assets';
import artikel from '../../Assets/Article/Article.json';
import { GlobalConsumer } from '../../Component/Context/Context';
import montserratbold from '../../Assets/fonts/montserratbold.ttf';
import montserratregular from '../../Assets/fonts/montserratregular.ttf';
import segoesc from '../../Assets/fonts/segoesc.ttf';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const windowWidth = Dimensions.get('window').width;
let customFonts = {
    montserratbold,
    segoesc,
    montserratregular,
};

class About extends Component {
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
                <ImageBackground source={BGAbout} style={{flex:1, resizeMode:'cover', justifyContent:"center"}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <SafeAreaView style={styles.container}>
                            <View style={{marginTop:15, marginBottom:5}}>
                                <ILogo width={windowWidth*0.32} height={windowWidth*0.32} />
                            </View>
                            <Text style={{fontFamily:'montserratbold', fontSize:20, marginBottom:2}}>TIGASMOS</Text>
                            <Text style={{fontFamily:'segoesc', fontSize:20, marginBottom:12}}>Version 1.0.0</Text>
                            <Text style={{fontWeight:"bold", fontFamily:'montserratregular', fontSize:16}}>TIDE GAUGE
                                MONITORING SYSTEM</Text>
                            <Text style={{fontSize:12, marginHorizontal:15,marginTop:5, marginBottom:5, textAlign:"center"}}>{artikel.about}</Text>
                            <Text style={{fontFamily:'segoesc', fontSize:16}}>Developed By :</Text>
                            <ScrollView showsHorizontalScrollIndicator={false}>
                                <View style={{flexDirection:'row', marginTop:5, justifyContent:'space-between'}}>
                                    <View style={{marginLeft:10, marginTop:25, alignItems:'center'}}>
                                        <IMask1 width={110} height={110} />
                                        <Text style={{fontWeight:'bold', fontSize:13}}>Nanda Winata</Text>
                                    </View>
                                    <View style={{marginHorizontal:1, alignItems:'center'}}>
                                        <IMask width={110} height={110} />
                                        <Text style={{fontWeight:'bold', fontSize:13}}>Drs. Agus Tri Sutanto, M.T.</Text>
                                    </View>
                                    <View style={{marginRight:10, marginTop:25, alignItems:'center'}}>
                                        <IMask2 width={110} height={110} />
                                        <Text style={{fontWeight:'bold', fontSize:13}}>Hanif Cahyo</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </ScrollView>
                </ImageBackground>
            )
        } else {
            return <AppLoading />
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15
    },
    notif:{
        marginLeft:10,
    },
    header:{
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
            height: 50,
            marginBottom:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    }
})

export default GlobalConsumer(About)