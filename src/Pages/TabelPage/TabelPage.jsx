import React, { Component } from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Row, Table } from 'react-native-table-component';
import { GlobalConsumer } from '../../Component/Context/Context';
import montserratbold from '../../Assets/fonts/montserratbold.ttf';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as FileSystem from 'expo-file-system';
import {Picker} from '@react-native-community/picker';

// var RNFS = require('react-native-fs');

let customFonts = {
    montserratbold,
};

class TabelPage extends Component {
    state={
        fontsLoaded:false,
        chartSite:'site1',
        tableHead:['Date','Time','Sensor 1','Sensor 2'],
        widthArr: [Dimensions.get('window').width*0.25,Dimensions.get('window').width*0.25,Dimensions.get('window').width*0.25, Dimensions.get('window').width*0.25]
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }
    
    handleDownload = async () =>{
        let fileUri = FileSystem.documentDirectory + "text.txt";
        await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
    }
    // handleDownload(data,site){
    //         var path = RNFS.DownloadDirectoryPath + `/tigasmos-${site}.csv`;
    //         // write the file
    //         RNFS.writeFile(path, data, 'utf8')
    //         .then((success) => {
    //             Alert.alert('Download Berhasil', `File tigasmos-${site}.csv disimpan di folder Download \n\n (${path})`);
    //         })
    //         .catch((err) => {
    //             Alert.alert('Download Error',err.message);
    //         });
    // }

    render() {
        if (this.state.fontsLoaded){
            return (
                <View style={styles.container}>
                    <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-around', marginVertical:10}}>
                    <Picker
                            selectedValue={this.state.chartSite}
                            style={{width: 120, color:"dodgerblue", fontWeight:'bold'}}
                            onValueChange={(itemValue, itemIndex) =>{
                                this.props.dispatch({type:`tabel_${itemValue}`})
                                this.setState({...this.state, chartSite: itemValue})
                              }
                            }>
                            <Picker.Item label="Site 1" value="site1" />
                            <Picker.Item label="Site 2" value="site2" />
                            <Picker.Item label="Site 3" value="site3" />
                        </Picker>
                        <Button
                            title="Download"
                            type="outline"
                            onPress={c=>this.handleDownload(this.props.state.csvData,this.props.state.siteTabel)}
                            />
                    </View>
                    <ScrollView horizontal={true} >
                        <View>
                            <Table borderStyle={{ borderWidth: 2, borderColor: 'rgba(59,59,59,0.38)', flex:1}}>
                                <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.head} textStyle={styles.textHead}/>
                            </Table>
                            <ScrollView style={styles.dataWrapper}>
                                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9', height:10 }}>
                                    {
                                    this.props.state.tabelData.map((rowData, index) => (
                                        <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={this.state.widthArr}
                                        style={[styles.row, index%2 && {backgroundColor: '#fff'}]}
                                        textStyle={styles.text}
                                        />
                                    ))
                                    }
                                </Table>  
                            </ScrollView>
                        </View>                    
                    </ScrollView>
                </View>
            )
        }else{
            return <AppLoading />
        }
    }
}

const styles = StyleSheet.create({
    container3:{
        marginTop:15,
        // marginBottom:20,
        paddingHorizontal:15
    },
    container6:{
        // marginLeft:38,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        marginTop:10
    },
    textHeader:{
        fontFamily:'montserratbold'
    },
    container: { flex: 1, backgroundColor: 'rgba(255,255,255,0.38)' },
    head: { height: 40, backgroundColor: '#162447'},
    textHead: { margin: 6, color:'#fff', textAlign: 'center', fontWeight: 'bold' },
    text:{
        textAlign:'center'
    },
    dataWrapper: { marginTop: -1},
    row: { height: 40, backgroundColor: 'rgba(21,34,70,0.07)' }
});

export default GlobalConsumer(TabelPage)
