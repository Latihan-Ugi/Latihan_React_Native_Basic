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
                backgroundColor : this.props.index % 2 ==  0 ? 'lightgreen' : 'tomato'
            }}>
                <Text>{this.props.item.nama}</Text>
                <Text>{this.props.item.alamat}</Text>
                <Text>{this.props.item.jk}</Text>
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