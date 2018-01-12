import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions, 
    TextInput, TouchableHighlight, ViewPagerAndroid, FlatList, 
    Platform } from 'react-native';

import FlatListData from '../data/FlatListData';

class FlatListItem extends Component{
    render(){
        return (
            <View style={{
                flex:1,
                flexDirection:'row',
                padding:5,
                backgroundColor : this.props.index % 2 ==  0 ? 'lightgreen' : 'tomato'
            }}>
                <Image
                    source={{uri: this.props.item.img}}
                    style={{width:70,height:70}}
                >
                </Image>
                <View style={{ flex:1, flexDirection:'column', marginLeft:5}}>
                    <Text>{this.props.item.nama}</Text>
                    <Text>{this.props.item.alamat}</Text>
                    <Text>{this.props.item.jk}</Text>
                </View>
            </View>
        );
    }
}

export default class LatihanFlatList extends Component {
    render(){
        return (
            <View style={{ 
                flex:1,
                marginTop: Platform.select ({ ios : 20, android : 0 }) }}>
                <FlatList data={FlatListData}
                    renderItem={({item, index}) => {
                        return(
                            <FlatListItem
                                item={item} 
                                index={index}
                            >
                            </FlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        );
    }
}


const styles = StyleSheet.create({

});