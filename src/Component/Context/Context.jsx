import Axios from 'axios'
import moment from 'moment'
import React, { Component, createContext } from 'react'
import { Alert } from 'react-native'
import socketIOClient from 'socket.io-client'
import * as Location from 'expo-location';
var parseString = require('react-native-xml2js').parseString;
const key = '59f2ab33ebb2defe6a1d5e6f8d546b42'

const url = `http://api.weatherstack.com/current?access_key=${key}&query=`

const RootContext = createContext()
var io = socketIOClient("http://tigasmos-stmkg.my.id:5000")
//Provider
const Provider = RootContext.Provider
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                mapStatus:false,
                badge:0,
                statusBarColor:'#010101',
                site1:[],
                site2:[],
                site3:[],
                siteChart:'site-1',
                siteTabel:'site-1',
                sensorChart:'ultrasonik',
                arrDataChart:[],
                tabelData:[],
                csvData:'',
                notif:[],
                gempaTerkini:{},
                potensiTsunami:{},
                lokasiSite:{},
                deltaMaps:{},
                lokasi:{
                    latitude:-6.860863,
                    longitude:106.749765
                },
                wCurrent:{
                    temperature:0,
                    humidity:0,
                    pressure:0,
                    wind_dir: 'N',
                    wind_degree:0,
                    wind_speed:0,
                    precip: 0,
                    weather_code:111,
                    weather_descriptions:'Loading...',
                    visibility: 0
                },
                wLocation:{
                    name:'Loading...',
                    region:'Loading...',
                    country:'Loading...'
                },
            }

            dispatch = (action) =>{
                switch(action.type){
                    case 'chart_sensor_ultrasonik':
                        this.setState({...this.state, sensorChart:'ultrasonik'})
                        break
                    case 'chart_sensor_tekanan':
                        this.setState({...this.state, sensorChart:'tekanan'})
                        break
                    case 'chart_site1':
                        this.setState({...this.state, siteChart:'site-1'})
                        break
                    case 'chart_site2':
                        this.setState({...this.state, siteChart:'site-2'})
                        break
                    case 'chart_site3':
                        this.setState({...this.state, siteChart:'site-3'})
                        break
                    case 'tabel_site1':
                        this.setState({...this.state, siteTabel:'site-1'})
                        break
                    case 'tabel_site2':
                        this.setState({...this.state, siteTabel:'site-2'})
                        break
                    case 'tabel_site3':
                        this.setState({...this.state, siteTabel:'site-3'})
                        break
                    case 'home_color':
                        this.setState({...this.state, statusBarColor:'#010101'})
                        break
                    case 'weather_color':
                        this.setState({...this.state, statusBarColor:'#393e46'})
                        break
                    case 'notif_color':
                        this.setState({...this.state, statusBarColor:'#1f4068', badge:0})
                        break
                    case 'sites_color':
                        this.setState({...this.state, statusBarColor:'#162447'})
                        break
                    case 'about_color':
                        this.setState({...this.state, statusBarColor:'#292B2A'})
                        break
                    case 'tambah_badge':
                        this.setState({...this.state, badge:this.state.badge+1})
                        break
                    default :
                        this.setState({...this.state})
                }
            }

            handleArray = (val) =>{
                if(this.state.sensorChart==='ultrasonik'){
                    return val.pasut_sensor_ultrasonik
                }else{
                    return val.pasut_sensor_tekanan
                }
            }

            handleTabel = (val) =>{
                return [moment(val.date).format('D/MM/YYYY'),moment(val.date).format('H:mm:ss'),val.pasut_sensor_ultrasonik,val.pasut_sensor_tekanan]
            }

            handleWeather = (lat,lon) =>{
                Axios.get(`${url}`+`${lat}`+','+`${lon}`)
                        .then((data)=>{
                            if(data.data.success===false){
                                this.setState({...this.state})
                                this.setState({...this.state})
                            }else{
                                this.setState({...this.state, wCurrent:data.data.current})
                                this.setState({...this.state, wLocation:data.data.location})
                            }
                        })
            }
            
            componentDidMount(){
                (async () => {
                    let { status } = await Location.requestPermissionsAsync();
                    if (status !== 'granted') {
                        Alert.alert('Error', 'Mohon aktifkan lokasi anda lalu buka kembali aplikasi dan izinkan aplikasi mengakses lokasi')
                    }    
                    let location = await Location.getCurrentPositionAsync({});
                    const dat = location.coords
                    this.handleWeather(dat.latitude,dat.longitude)
                    this.setState({...this.state, lokasi:dat})
                    this.setState({...this.state, mapStatus:true})
                })();                

                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/${this.state.siteTabel}`)
                        .then((val)=>{
                            // // get data to CSV Data | Start ------
                            // const jsonData = val.data.datas
                            // const csvRows = []
                            // const header = ["date","pasut_sensor_ultrasonik","pasut_sensor_tekanan"]
                            // csvRows.push(header.join(','))
                            // for(const row of jsonData){
                            //     const val = header.map(header=>{
                            //         const escape = (''+row[header]).replace(/"/g, '\\"')
                            //         return row[header]
                            //     })
                            //     csvRows.push(val.join(','))
                            // }
                            // const csv = csvRows.join('\n')
                            // this.setState({...this.state, csvData:csv})

                            // // get data to CSV Data | End ------

                            // get data to table Data | Start ------
                            val.data.datas.sort(function(a, b) {
                                var keyA = new Date(a.date),
                                keyB = new Date(b.date);
                                // Compare the 2 dates
                                if (keyA < keyB) return -1;
                                if (keyA > keyB) return 1;
                                return 0;
                            });
                            val.data.datas.reverse()
                            let data = val.data.datas.map(this.handleTabel)
                            let dat = data.slice(0,10)
                            this.setState({...this.state, tabelData:dat})  
                            
                            // get data to table Data | End ------
                        })
                        // .then((data)=>{
                        //     const jsonData = data.data.datas
                        //     const csvRows = []
                        //     // get header
                        //     const header = ["date","pasut_sensor_ultrasonik","pasut_sensor_tekanan"]
                        //     // const header = Object.keys(jsonData[0])
                        //     csvRows.push(header.join(','))
                
                        //     // loop over the rows
                        //     for(const row of jsonData){
                        //         const val = header.map(header=>{
                        //             const escape = (''+row[header]).replace(/"/g, '\\"')
                        //             return row[header]
                        //         })
                        //         csvRows.push(val.join(','))
                        //     }
                        //     const csv = csvRows.join('\n')
                        //     this.setState({...this.state, csvData:csv})
                        // }); 
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/lokasi`)
                    .then((val)=>{
                        let data = val.data.datas
                        this.setState({...this.state, lokasiSite:data})                        
                    })
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/delta`)
                    .then((val)=>{
                        let data = val.data.datas
                        this.setState({...this.state, deltaMaps:data})                        
                    })
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/${this.state.siteChart}`)
                        .then((val)=>{
                            let data = val.data.datas.map(this.handleArray)
                            let batasBawah = (val) =>{
                                if(val<=25){
                                    return 0
                                }else{
                                    return val-25
                                }
                            }
                            let dat = data.slice(batasBawah(data.length),data.length)
                            this.setState({...this.state, arrDataChart:dat})                        
                    })
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/site-1`)
                    .then((val)=>{
                        let data = val.data.datas
                        this.setState({...this.state, site1:data})                        
                    })
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/site-2`)
                    .then((val)=>{
                        let data = val.data.datas
                        this.setState({...this.state, site2:data})
                    })
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/site-3`)
                    .then((val)=>{
                        let data = val.data.datas
                        this.setState({...this.state, site3:data})
                    })
                Axios.get(`http://tigasmos-stmkg.my.id:5000/api/notif`)
                    .then((val)=>{
                        let data = val.data.datas
                        let batasBawah = (val) =>{
                            if(val<=8){
                                return 0
                            }else{
                                return val-8
                            }
                        }
                        let dat = data.slice(batasBawah(data.length),data.length)
                        this.setState({...this.state, notif:dat})
                    })
                Axios.get('https://data.bmkg.go.id/gempadirasakan.xml')
                    .then((val)=>{
                        parseString(val.data, (err, result)=>{
                            let data = result.Infogempa.Gempa[0]
                            this.setState({...this.state, gempaTerkini:data})
                        })
                    })  
                Axios.get('https://data.bmkg.go.id/lasttsunami.xml')
                    .then((val)=>{
                        parseString(val.data, (err, result)=>{
                            let data = result.Infotsunami.Gempa[0]
                            this.setState({...this.state, potensiTsunami:data})
                        })
                    })
                    
                
                io.on("site-1", (data) => {
                    this.state.site1.push(data)
                    this.setState({...this.state, site1:this.state.site1})
                    if(this.state.siteChart==="site-1"){
                        if(this.state.sensorChart==='ultrasonik'){
                            this.state.arrDataChart.push(data.pasut_sensor_ultrasonik)
                            this.setState({...this.state, arrDataChart:this.state.arrDataChart})
                        }
                        if(this.state.sensorChart==='tekanan'){
                            this.state.arrDataChart.push(data.pasut_sensor_tekanan)
                            this.setState({...this.state, arrDataChart:this.state.arrDataChart})
                        }
                    }
                })
                io.on("site-2", (data) => {
                    this.state.site2.push(data)
                    this.setState({...this.state, site2:this.state.site2})

                    if(this.state.siteChart==="site-2"){
                        if(this.state.sensorChart==='ultrasonik'){
                            this.state.arrDataChart.push(data.pasut_sensor_ultrasonik)
                            this.setState({...this.state, arrDataChart:this.state.arrDataChart})
                        }
                        if(this.state.sensorChart==='tekanan'){
                            this.state.arrDataChart.push(data.pasut_sensor_tekanan)
                            this.setState({...this.state, arrDataChart:this.state.arrDataChart})
                        }
                    }
                })
                io.on("site-3", (data) => {
                    this.state.site3.push(data)
                    this.setState({...this.state, site3:this.state.site3})

                    if(this.state.siteChart==="site-3"){
                        if(this.state.sensorChart==='ultrasonik'){
                            this.state.arrDataChart.push(data.pasut_sensor_ultrasonik)
                            this.setState({...this.state, arrDataChart:this.state.arrDataChart})
                        }
                        if(this.state.sensorChart==='tekanan'){
                            this.state.arrDataChart.push(data.pasut_sensor_tekanan)
                            this.setState({...this.state, arrDataChart:this.state.arrDataChart})
                        }
                    }
                })
                io.on("notif", (data) => {
                    this.state.notif.push(data)
                    this.setState({...this.state, notif:this.state.notif})
                    this.dispatch({type:'tambah_badge'})
                })
                
            }

            componentDidUpdate(prevProps, prevState){
                if(prevState.siteChart !== this.state.siteChart | prevState.sensorChart !== this.state.sensorChart ){
                    Axios.get(`http://tigasmos-stmkg.my.id:5000/api/${this.state.siteChart}`)
                        .then((val)=>{
                            let data = val.data.datas.map(this.handleArray)
                            let batasBawah = (val) =>{
                                if(val<=25){
                                    return 0
                                }else{
                                    return val-25
                                }
                            }
                            let dat = data.slice(batasBawah(data.length),data.length)
                            this.setState({...this.state, arrDataChart:dat})                        
                        })
                }
                if(prevState.siteTabel !== this.state.siteTabel ){
                    Axios.get(`http://tigasmos-stmkg.my.id:5000/api/${this.state.siteTabel}`)
                        .then((val)=>{
                            const jsonData = val.data.datas
                            const csvRows = []
                            const header = ["date","pasut_sensor_ultrasonik","pasut_sensor_tekanan"]
                            csvRows.push(header.join(','))
                            for(const row of jsonData){
                                const val = header.map(header=>{
                                    const escape = (''+row[header]).replace(/"/g, '\\"')
                                    return row[header]
                                })
                                csvRows.push(val.join(','))
                            }
                            const csv = csvRows.join('\n')
                            this.setState({...this.state, csvData:csv})

                            val.data.datas.sort(function(a, b) {
                                var keyA = new Date(a.date),
                                keyB = new Date(b.date);
                                // Compare the 2 dates
                                if (keyA < keyB) return -1;
                                if (keyA > keyB) return 1;
                                return 0;
                            });
                            val.data.datas.reverse()
                            let data = val.data.datas.map(this.handleTabel)
                            let dat = data.slice(0,10)
                            this.setState({...this.state, tabelData:dat})                      
                        })
                }
            }

            componentWillUnmount(){
                io.off("site-1")
                io.off("site-2")
                io.off("site-3")
                io.off("notif")
            }

            render(){
                return(
                    <Provider value={
                        {
                            state:this.state,
                            dispatch:this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider

//Consumer
const Consumer = RootContext.Consumer

export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }                        
                    </Consumer>                    
                )
            }
        }        
    )
}
