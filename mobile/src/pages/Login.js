import React from 'react';
import {View,Image, Text, StyleSheet} from 'react-native';
import logo from '../assets/logo.png';
export default function Login(){
    return(
        <View style={styles.container}>
            <Image source={logo}/>
            <View styel={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
            </View>
        </View> 
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal:30,
        marginTop: 30

    },
    label:{
        fontWeight: 'bold',
        color:'#444',
        marginBottom:8
    }

})
// 38.19