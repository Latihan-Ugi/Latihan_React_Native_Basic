import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';

export default class LatihanTextInput extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            textEmail: 'Email Anda..',
            textPassword: 'Password Anda..',
            textDes: 'Deskripsi Anda..'
        }
    }
    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(() => {
                return {textEmail:'Keyboard Di Tampikan'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(() => {
                return {textEmail:'Keyboard Di Sembunyikan'}
            })
        });
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();        
        this.keyboardDidHideListener.remove();
    }
    render(){
        return(
            <View>
                <TextInput 
                style={{ borderWidth:1, margin:40, padding:10, height:40, borderColor:'gray' }}
                keyboardType='email-address'
                placeholder='Masukan Email'
                placeholderTextColor='red'
                onChangeText={
                    (text) => {
                        this.setState(
                          (proviousState) =>{
                              return{
                                textEmail: text
                              };
                          }  
                        );
                    }
                }
                />
                <Text style={{ marginLeft: 40}}>{ this.state.textEmail }</Text>
                <TextInput 
                style={{ borderWidth:1, margin:40, padding:10, height:40, borderColor:'gray' }}
                keyboardType='default'
                placeholder='Masukan Password'
                placeholderTextColor='red'
                secureTextEntry={true}
                onChangeText={
                    (text) => {
                        this.setState(
                          (proviousState) =>{
                              return{
                                textPassword: text
                              };
                          }  
                        );
                    }
                }
                />
                <Text style={{ marginLeft: 40}}>{ this.state.textPassword }</Text>
                <TextInput 
                style={{ borderWidth:1, margin:40, padding:10, height:100, borderColor:'gray' }}
                multiline={true}
                borderBottomColor='green'
                borderBottomWidth={3}
                editable={true}
                autoFocus={false}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={
                        (text) => {
                            this.setState(
                            (proviousState) =>{
                                return{
                                    textDes: text
                                };
                            }  
                            );
                        }
                    }
                />
             </View>
        );
    }
}

const styles = StyleSheet.create({
});