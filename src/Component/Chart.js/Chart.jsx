import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import { LineChart } from "react-native-chart-kit";
// import { GlobalConsumer } from '../Context/Context';

class Chart extends Component {        
    render() {
        return (
            <View style={styles.box}>
                <LineChart
                    data={{
                        datasets: [
                            {
                            data: this.props.data
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width-30} // from react-native
                    height={200}
                    yAxisSuffix=" m"
                    yAxisInterval={10} // optional, defaults to 1
                    chartConfig={{
                        backgroundGradientFromOpacity:0,
                        backgroundGradientToOpacity:0,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: () => "#162447",
                        labelColor: () => "black",
                        style: {
                            borderRadius: 15,
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "2",
                            stroke: "blue"
                        }
                    }}
                    bezier
                    style={{
                        alignContent:'center',
                        justifyContent:'center',
                        borderRadius: 15,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        // marginVertical:10,
        marginTop:10,
        marginBottom:5,
        borderWidth:2,
        borderRadius:15,
        borderColor:'rgba(59,59,59,0.38)',
        // height:150,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
        // paddingHorizontal:10
    },
})

export default Chart
