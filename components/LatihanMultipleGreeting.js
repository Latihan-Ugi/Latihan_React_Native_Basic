import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Greeting extends Component {
    render(){
        return(
            <Text>Hallo { this.props.nama }</Text>
        );  
    }
}

export default class LatihanMultipleGreeting extends Component{
    render(){
        return(
            <View style={styles.nama}>
                <Greeting nama="Semua"></Greeting>
                <Greeting nama="Dunia"></Greeting>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nama:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999',
    }
});