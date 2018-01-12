import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions, 
    TextInput, TouchableHighlight } from 'react-native';

export default class LatihanVeritcalScrollView extends Component {
    render(){
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                maximumZoomScale={3}
                minimumZoomScale={0.5}
                contentContainerStyle={{paddingLeft:10,paddingRight:10}}
            >
                <TouchableHighlight
                    underlayColor='red'
                    onPress={() => {
                        alert('ScrollView');
                    }}
                >
                    <Image
                        source={require('./../images/logo_asn-01.png')}
                        style={{width:screenWidth,height:screenWidth * 2152 / 4037, marginTop:30 }}
                    >
                    </Image>
                </TouchableHighlight>
                <Text style={{ fontSize:20,padding:10,textAlign:'center',backgroundColor:'green',color:'white'}}>
                    Text
                </Text>
                <TextInput 
                style={{ borderWidth:1, margin:10, padding:10, height:40, borderColor:'gray' }}
                keyboardType='email-address'
                placeholder='Masukan Email'
                />
                <View style={{ height:50, backgroundColor:'maroon' }}>
                    <Text style={{ fontSize: 20, padding:15, textAlign:'center', color:'#ffffff'}}>Text Inside a View</Text>
                </View>
                <Image
                    source={require('./../images/logo_asn-01.png')}
                    style={{width:screenWidth,height:screenWidth * 2152 / 4037, marginTop:30 }}
                >
                </Image>
                <Image
                    source={require('./../images/logo_asn-01.png')}
                    style={{width:screenWidth,height:screenWidth * 2152 / 4037, marginTop:30 }}
                >
                </Image>
                <Image
                    source={require('./../images/logo_asn-01.png')}
                    style={{width:screenWidth,height:screenWidth * 2152 / 4037, marginTop:30 }}
                >
                </Image>
                <Image
                    source={require('./../images/logo_asn-01.png')}
                    style={{width:screenWidth,height:screenWidth * 2152 / 4037, marginTop:30 }}
                >
                </Image>
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