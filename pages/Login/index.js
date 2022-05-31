// Commom
import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TextInput, Pressable, Image, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as LocalAuthentication from 'expo-local-authentication';
// Created:
import { api } from '../../services/api';
import styles from './style';
// Assets
import UserAvatar from '../../assets/userAvatar.png';
import PasswordAvatar from '../../assets/password.jpg'
import LoginPageImage from '../../assets/tasks.png';
import TelaLogin from '../../assets/telaLogin.png';

function onTextEntry ( text ){
    alert( text );
}

export default function Login( props ){
    const [ errorLogin, setErrorLogin ] = useState( false );
    const [ login, setLogin ] = useState( false );
    const [ isEnabledBiometric, setIsEnabledBiometric ] = useState(false);
    const [ isEnabledRememberMe, setIsEnabledRememberMe ] = useState(false);
    const [ user, setUser ] = useState({
        login: '',
        password: ''
    })
    
    const toggleSwitchBiometric = () => setIsEnabledBiometric( previousState => !previousState );
    const toggleSwitchRememberMe = () => setIsEnabledRememberMe( previousState => !previousState );

    async function loadConfigSwitches(){
        let userSaveLogin=await AsyncStorage.getItem('userSaveLogin');
        let jsonUserSaveLogin=await JSON.parse(userSaveLogin);

        let userBiometric=await AsyncStorage.getItem('userBiometric');
        let jsonUserBiometric=await JSON.parse(userBiometric);

        if(jsonUserSaveLogin !== null){
            setIsEnabledRememberMe( true );
        }

        if(jsonUserBiometric !== null){
            setIsEnabledBiometric( true );
        }
    }

    async function verifyBiometric(){
        let response=await AsyncStorage.getItem('userBiometric');
        let json = await JSON.parse( response );
        if( json !== null ){
            setUser( json );
            setLogin( true );
        }
    }

    async function verifyRememberUser(){
        let response=await AsyncStorage.getItem('userSaveLogin');
        let json = await JSON.parse( response );
        if( json !== null ){
            setUser( { ...user, login: json.login } );
            setLogin( true );
        }
    }

    //Biometria
    async function biometric() {
        let compatible= await LocalAuthentication.hasHardwareAsync();
        if(compatible){
            let biometricRecords = await LocalAuthentication.isEnrolledAsync();
            if(!biometricRecords){
                alert('Biometria não cadastrada');
            }else{
                let result=await  LocalAuthentication.authenticateAsync();
                if(result.success){
                    onLogin();
                }else{
                    setUser(null);
                }
            }
        }
    }
    
    useEffect(()=>{
        loadConfigSwitches();
        verifyRememberUser();
        verifyBiometric();
    },[]);
    
    useEffect(()=>{
        if(login === true){
            biometric();
        }
    },[ login ]);

    async function onLogin(){
        try{
            let result = await api.post( 'login', user );
            let userTokenGuard = `Bearer ${ result.data }`;
            await AsyncStorage.removeItem( 'userAuth' );
            await AsyncStorage.setItem( 'userAuth', userTokenGuard );
            await AsyncStorage.setItem( 'userLogged', JSON.stringify( user ) );

            if( isEnabledRememberMe ){
                await AsyncStorage.setItem( 'userSaveLogin', JSON.stringify( user ) );
            }else{
                await AsyncStorage.removeItem('userSaveLogin');
            }

            if( isEnabledBiometric ){
                await AsyncStorage.setItem( 'userBiometric', JSON.stringify( user ));
            }else{
                await AsyncStorage.removeItem('userBiometric');
            }
            props.navigation.navigate( 'RestrictArea' );

        }catch( error ){
            alert(error.message);
            await AsyncStorage.removeItem('userAuth');
            setErrorLogin( true );
            // alert('Houve uma falha ao tentar realizar o login'+error.message);
        }
    }

    return (
        <ImageBackground source={ LoginPageImage } style={ styles.container }>
            <View style={ styles.containerForm }>
                <View style={ styles.containerInput }>
                    <Image source={ UserAvatar } style={ styles.imgInput }/>
                    <TextInput 
                        style={ styles.input }
                        value={ user?.login ? user.login : '' }
                        onChangeText={ text => setUser( { ...user, login: text } ) }
                        placeholder="Usuário"
                        onPressIn={ () => setErrorLogin( false ) }
                    />
                </View>
                <View style={ styles.containerInput }>
                    <Image source={ PasswordAvatar } style={ styles.imgInput }/>
                    <TextInput 
                        style={ styles.input }
                        onChangeText={ text => setUser( { ...user, password: text } ) }
                        placeholder="Senha"
                        secureTextEntry={ true }
                        onPressIn={ () => setErrorLogin( false ) }
                    />
                </View>
                <Pressable style={ styles.botaoLogin } onPress={ onLogin }>
                    <Text style={ styles.textoLogin }>LOGIN</Text>
                </Pressable>
                { errorLogin ? <Text style={ styles.textoErroLogin }>Usuário e/ou senha inválido(s)</Text> : <Text></Text>}
                <View style={ styles.containerSwitch }>
                    <Text>Salvar usuário?</Text>
                    <Switch
                        trackColor={ { false: "#767577", true: "darkblue" } }
                        thumbColor={ isEnabledRememberMe ? "purple" : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={ toggleSwitchRememberMe }
                        value={ isEnabledRememberMe }
                    />
                    <Text>Ativar Biometria</Text>
                    <Switch
                        trackColor={ { false: "#767577", true: "darkblue" } }
                        thumbColor={ isEnabledBiometric ? "purple" : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={ toggleSwitchBiometric }
                        value={ isEnabledBiometric }
                    />
                </View>
            </View>
        </ImageBackground>
    )
}