import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Klincong extends Component{
    constructor(props){
        super(props);
        this.state = {
            nampilText: true
        };
        var perulangan = () => { 
            this.setState(previousState => {
                return {
                    nampilText: !previousState.nampilText
                };
            });
        }; 
        const waktu = 200;
        setInterval(perulangan,waktu);
    }
    render(){
        let textDitampilkan = this.state.nampilText ? this.props.masukanText: ' ';
        return(
            <Text>{ textDitampilkan }</Text>
        );
    }
}

export default class LatihanState extends Component{ 
    render(){
        return(
            <View style={{ alignContent:'center', flex:1,
            justifyContent: 'center', alignItems: 'center' }}>
                <Klincong masukanText="Percobaan State"></Klincong>
            </View>
        );
    }
}