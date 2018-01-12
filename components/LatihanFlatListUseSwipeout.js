import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions, 
    TextInput, TouchableHighlight, ViewPagerAndroid, FlatList, 
    Platform, Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';

import FlatListData from '../data/FlatListData';

class FlatListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null){
                    this.setState({activeRowKey:null})
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey:this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Apakah Yakin Ingin di Hapus ?',
                            [
                                { text: 'No', onPress:() => 
                                    console.log('tidak jadi'), 
                                    style: 'cancel'
                                },
                                { text: 'Yes', onPress:() => {
                                   FlatListData.splice(this.props.index, 1)
                                   // refresh
                                   this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Hapus', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId:1
        };
        return (
            <Swipeout {...swipeSettings}>
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
            </Swipeout>
        );
    }
}

export default class LatihanFlatListUseSwipeout extends Component {
    constructor(props){
        super(props);
        this.state = {
            deletedRowKey: null
        }
    }
    refreshFlatList = (hapuskey) => {
        this.setState((prevstate) => {
            return {
                deletedRowKey:hapuskey
            };
        });
    }
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
                                parentFlatList={this}
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