import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions, 
    TextInput, TouchableHighlight, ViewPagerAndroid } from 'react-native';

export default class LatihanViewPager extends Component {
    render(){
        return (
            <ViewPagerAndroid style={{ flex:1}}
                initialPage={0}
                onPageScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.Offset}` 
                    console.log(logData);
                }}
                onPageScrollStateChange={(state) => {
                    console.log(`Scrolled state = ${state}`)
                }}
                onPageSelected={(event) => {
                    console.log(`Scroll to page = ${event.nativeEvent.position}`)
                }}
            >
                <View style={{ backgroundColor:'lightseagreen'}}>
                    <Text style={styles.text}>Hallo</Text>
                </View>
                <View style={{ backgroundColor:'salmon'}}>
                    <Text style={styles.text}>Hallo</Text>
                </View>
                <View style={{ backgroundColor:'red'}}>
                    <Text style={styles.text}>Hallo</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize:20,
        fontWeight:'bold',
        padding:15,
        color:'white',
        textAlign:'center'
    }
});