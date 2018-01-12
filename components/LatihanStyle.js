import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LatihanStyle extends Component{ 
    render(){
        return(
            <View style={{ alignContent:'center', flex:1,justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color:'#ff00ff'}}>Inline Style</Text>
                <Text style={styles.test}>Outline Style Hallo</Text>
                <Text style={[styles.test, styles.test1]}>Two Outline Style</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    test:{
        color:'#787878',
        fontSize:25
    },
    test1: {
        backgroundColor:'#333'
    }
});