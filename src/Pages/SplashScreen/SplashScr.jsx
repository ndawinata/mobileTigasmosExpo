import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import React from 'react';
import { Dimensions, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import { BGSplash, ILogo } from '../../Assets';
import montserratbold from '../../Assets/fonts/montserratbold.ttf';
import segoesc from '../../Assets/fonts/segoesc.ttf';

const windowWidth = Dimensions.get('window').width;
const SplashScr = () => {
    let [fontsLoaded] = useFonts({
        montserratbold,
        segoesc,
    });
    
    if (!fontsLoaded) {
        return <AppLoading /> ;
    }

    return(
        <ImageBackground source={BGSplash} style={{flex:1, resizeMode:'cover', justifyContent:"center"}}>
            <StatusBar hidden={true}/>
            <View style={styles.container}>
                <ILogo width={windowWidth*0.34} height={windowWidth*0.34} />
                <Text style={styles.text1}> TIGASMOS </Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}> Version 1.0.0 </Text>
                <Text style={styles.text2}> 2020 </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:7,
        justifyContent:'center',
        alignItems:'center'
    },
    container1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'segoesc',
        fontSize:24
    },
    text2:{
        fontFamily:'segoesc',
        fontSize:24
    },
    text1:{
        fontFamily:'montserratbold',
        fontSize:22,
        fontWeight:'bold',
        marginTop:6,
        letterSpacing:2,
    }
})

export default SplashScr
