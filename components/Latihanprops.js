import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default class Latihanprops extends Component {
    render(){
        var imageSource = {
            uri: "http://www.dasacoaching.de/sites/default/files/field_showcase_image/slider_hallo-01.png"
        };
        return (
            <View>
                <Image source={ imageSource }
                    style={styles.img}></Image>
            </View>
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