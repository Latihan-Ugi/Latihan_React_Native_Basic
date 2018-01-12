import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions, 
    TextInput, TouchableHighlight } from 'react-native';

export default class LatihanHorizontalScrollView extends Component {
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                scrollIndicatorInsets={{ top:10, left: 10, right: 10, bottom: 10}} // Just Ios
                // onMomentumScrollBegin={() => {
                //     alert('Start');
                // }}
                onMomentumScrollEnd={() => {
                    alert('end');
                }}
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}` 
                    console.log(logData);
                }}
                scrollEventThrottle={10}
            >
                <View style={{ backgroundColor:'#00ff00', flex:1,justifyContent: 'center', alignItems: 'center', width:screenWidth,height:screenHeight}} >
                    <Text>
                        hallo
                    </Text>
                </View>
                <View style={{ backgroundColor:'#00ffff', flex:1,justifyContent: 'center', alignItems: 'center', width:screenWidth,height:screenHeight}} >
                    <Text>
                        hallo
                    </Text>
                </View>
                <View style={{ backgroundColor:'#003300', flex:1,justifyContent: 'center', alignItems: 'center', width:screenWidth,height:screenHeight}} >
                    <Text>
                        hallo
                    </Text>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    img: {
        width:100, 
        height:300,
        flex:1
    }
});