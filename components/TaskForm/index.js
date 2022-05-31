import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './style';

export default function TaskForm (){

    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: ''
    });

    function onSubmit(){
        alert('Enviado')
    }

    return(
        <View style={styles.containerForm}>
            {/* Titulo */}
            <View style={styles.containerInput}>
                {/* <Image source={UserAvatar} style={styles.imgInput} /> */}
                <TextInput 
                    style={ styles.input }
                    onChangeText={ text => setTask( { ...task, title: text } ) }
                    placeholder="Título"
                    // onPressIn={ () => setErrorLogin( false ) }
                />
            </View>

            {/* Descrição */}
            <View style={styles.containerInput}>
                {/* <Image source={PasswordAvatar} style={styles.imgInput} /> */}
                <TextInput 
                    style={ styles.input }
                    onChangeText={ text => setTask( { ...user, description: text } ) }
                    placeholder="Descrição"
                    // onPressIn={ () => setErrorLogin( false ) }
                />
            </View>

            {/* Prioridade */}
            <View style={styles.containerInput}>
                {/* <Image source={PasswordAvatar} style={styles.imgInput} /> */}
                <TextInput 
                    style={ styles.input }
                    onChangeText={ text => setTask( { ...user, priority: text } ) }
                    placeholder="Prioridade"
                    // onPressIn={ () => setErrorLogin( false ) }
                />
            </View>

            <Pressable style={styles.botaoLogin} onPress={ onSubmit }>
                <Text style={styles.textoLogin}>LOGIN</Text>
            </Pressable>
            {/* { errorLogin ? <Text style={ styles.textoErroLogin }>Usuário e/ou senha inválido(s)</Text> : <Text></Text>} */}
            
        </View>
    )


}