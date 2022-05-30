// Commom
import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
// Created:
import { api } from '../../services/api';
import styles from './style';
// Assets
import UserAvatar from '../../assets/userAvatar.png';
import PasswordAvatar from '../../assets/password.jpg'
import LoginPageImage from '../../assets/tasks.png';
import TelaLogin from '../../assets/telaLogin.png';

function onTextEntry (text){
    alert(text);
}

export default function Login(props){
    const [user, setUser] = useState({
        login: '',
        password: ''
    })

    const [ errorLogin, setErrorLogin ] = useState(false);

    async function onLogin(){
        try{
            let result = await api.post('login',user);
            let userTokenGuard = `Bearer ${ result.data }`;
            await AsyncStorage.clear();
            await AsyncStorage.setItem('userAuth', userTokenGuard );
            await AsyncStorage.setItem('userLogged', JSON.stringify( user ) );

            props.navigation.navigate('RestrictArea');
        }catch( error ){
            // alert(error.message);
            await AsyncStorage.clear();
            setErrorLogin(true);
            // alert('Houve uma falha ao tentar realizar o login'+error.message);
        }
    }

    return(
        <ImageBackground source={ LoginPageImage } style={ styles.container }>
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <Image source={UserAvatar} style={styles.imgInput} />
                    <TextInput 
                        style={ styles.input }
                        onChangeText={ text => setUser( { ...user, login: text } ) }
                        placeholder="Usuário"
                        onPressIn={ () => setErrorLogin( false ) }
                    />
                </View>
                <View style={styles.containerInput}>
                    <Image source={PasswordAvatar} style={styles.imgInput} />
                    <TextInput 
                        style={ styles.input }
                        onChangeText={ text => setUser( { ...user, password: text } ) }
                        placeholder="Senha"
                        secureTextEntry={ true }
                        onPressIn={ () => setErrorLogin( false ) }
                    />
                </View>
                <Pressable style={styles.botaoLogin} onPress={ onLogin }>
                    <Text style={styles.textoLogin}>LOGIN</Text>
                </Pressable>
                { errorLogin ? <Text style={ styles.textoErroLogin }>Usuário e/ou senha inválido(s)</Text> : <Text></Text>}
                
            </View>
        </ImageBackground>
    )
}