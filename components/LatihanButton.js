import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from 'react-native-button';

export default class LatihanButton extends Component{ 
    _FungsiKlik = () => {
        Alert.alert("Luar Biasa Kamu");
    }
    render(){
        return(
            <View style={{ alignContent:'center', flex:1,justifyContent: 'center', alignItems: 'center' }}>
            {/* <View style={{ backgroundColor:'red', 
            borderRadius:16,
            padding:10,
            shadowRadius:20,
            shadowOpacity:0.5 }}>
                <Button onPress={ this._FungsiKlik }
                title="Ini Button"
                color='white'
                />
            </View> */}
            <Button
                style={{ fontSize:20, color:'blue' }}
                onPress={ this._FungsiKlik }
            >
            HALLO
            </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});