import React, {useState} from 'react';
import {View,Image,AsyncStorage, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Dados({ navigation}){
    const [nome,setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tech,setTechs] = useState('');

    async function handleSubmit(){
        navigation.navigate('List');
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo}/>
            <View style={styles.form}>
                <Text style={styles.label}>Nome *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome e útilmo sobrenome"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={setNome}
                />
                <Text style={styles.label}>Telefone *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu telefone"
                    placeholderTextColor="#999"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={telefone}
                    onChangeText={setTelefone}
                />

                <Text style={styles.label}>Endereço *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Rua, número"
                    placeholderTextColor="#999"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={endereco}
                    onChangeText={setEndereco}
                />
                <Text style={styles.label}>Cidade *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Corumbá ou Ladário"
                    placeholderTextColor="#999"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={tech}
                    onChangeText={setTechs}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Guardar dados</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView> 
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffe999',

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
    },
    input: {
        borderWidth:1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button:{
        height:42,
        backgroundColor: '#fbd032',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 2,
    },

    buttonText:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize: 16,
    },
});
