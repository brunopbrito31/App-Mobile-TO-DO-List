import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TextInput, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginPageImage from '../../assets/tasks.png';
import UserAvatar from '../../assets/userAvatar.png';
import PasswordAvatar from '../../assets/password.jpg'
import TelaLogin from '../../assets/telaLogin.png';
import { api } from '../../services/api';
import styles from './style';

function onTextEntry (text){
    alert(text);
}

export default function Login({ navigation }){
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

            navigation.navigate('Tarefas Ativas');
        }catch( error ){
            await AsyncStorage.clear();
            setErrorLogin(true);
            // alert('Houve uma falha ao tentar realizar o login'+error.message);
        }
    }

    return(
        <ImageBackground source={ TelaLogin } style={ styles.container }>
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