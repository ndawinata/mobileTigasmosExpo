import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import moment from 'moment';
import SafeAreaView from 'react-native-safe-area-view';
import { ITsunami, BGUtama } from '../../Assets';
import { GlobalConsumer } from '../../Component/Context/Context';
import { ScrollView } from 'react-native-gesture-handler';

const HandleData = (props) =>{
    return(
        <View style={styles.container1}>
            <View style={styles.container2}>
                <View style={styles.logo}>
                    <ITsunami height={45} width={45} fill={"#3b3b3b"} />
                </View>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text1}>{moment(props.date).format('D MMM YYYY')} | {moment(props.date).format('H:mm:ss')}</Text>
                <Text style={styles.textMuted}>{props.lokasi}</Text>
                <Text style={styles.text2}>Konfirmasi Kedatangan Tsunami di {props.nama} Setinggi {props.heigh} meter</Text>
            </View>
        </View>
    )
}

const HandleMap = (props) =>{
    props.data.sort(function(a, b) {
        var keyA = new Date(a.date),
        keyB = new Date(b.date);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    props.data.reverse()
    // cara mengurutkan terbalik di sort lalu direverse
    return props.data.map((data, index)=>{
        return <HandleData key={index} nama={data.nama} date={data.date} time={data.date} lokasi={data.lokasi} heigh={data.ketinggian} />
    })
}

class Notifications extends Component {

    componentDidMount(){
        // this.props.dispatch({type:'hapus_badge'})
    }

    render() {
        return (
            <ImageBackground source={BGUtama} style={{flex:1 }}>
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            <HandleMap data={this.props.state.notif} />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:15
    },
    container1:{
        flexDirection:'row',
        borderBottomColor: 'rgba(112,112,112,0.34)',
        borderBottomWidth: 1,
        paddingVertical:8,
        justifyContent:'center'
    },
    container2:{
        flex:3,
        alignItems:'center'
    },
    container3:{
        flex:10,
        marginLeft:8
    },
    logo:{
        alignItems:'center',
        justifyContent:'center',
        height:65,
        width:65,
        borderRadius:40,
        backgroundColor:"#035aa6"
    },
    text1:{
        fontWeight:'bold',
        fontSize:12
    },
    text2:{
        fontSize:12,
        textAlign:'justify'
    },
    textMuted:{
        color:'#888888',
        fontSize:11
    }
})
export default GlobalConsumer(Notifications)
