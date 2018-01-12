import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Button from 'react-native-button';

export default class LatihanTouchable extends Component{ 
    _FungsiKlik = () => {
        Alert.alert("Luar Biasa Kamu");
    }
    render(){
        return(
            <View style={{ alignContent:'center', flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor:'yellow' }}>
                <TouchableHighlight
                    onPress={() => {
                        alert("alert");
                    }}
                    underlayColor='red'
                    onShowUnderlay={() => {
                        alert("Hallo Touchable");
                    }}
                > 
                    <View style={{ backgroundColor:'green'}}>
                        <Text style={{ color:'white', padding:20, fontSize:20}}>
                            Hallo
                        </Text>
                        {/* <Image style={{width:50,height:50}}
                            source={require('./../images/resizeimage.png')}
                        >
                        </Image> */}
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress={this._FungsiKlik}
                    useForeground={false}
                >
                    <View
                        style={{width:300,height:50,margin:10,backgroundColor:'green'}}
                    >
                        <Text
                            style={{margin:10,fontSize:20,color:'white',textAlign:'center'}}
                        >
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity 
                    onPress={this._FungsiKlik}
                    activeOpacity={0.7}
                >
                    <View
                        style={{width:300,height:50,margin:10,backgroundColor:'green'}}
                    >
                        <Text
                            style={{margin:10,fontSize:20,color:'white',textAlign:'center'}}
                        >
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    // onPress={this._FungsiKlik}
                    // onPressIn={() => {
                    //     alert("onPressIn");
                    // }}
                    // onPressOut={() => {
                    //     alert("onPressOut");
                    // }}
                    onLongPress={this._FungsiKlik}
                    disabled={false}
                >
                    <View
                        style={{width:300,height:50,margin:10,backgroundColor:'green'}}
                    >
                        <Text
                            style={{margin:10,fontSize:20,color:'white',textAlign:'center'}}
                        >
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});