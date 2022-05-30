import React, { useState, useEffect } from 'react';
import { ScrollView, ImageBackground, Pressable, Text, View, Image } from 'react-native';
import Tasks from '../../assets/tasks.png';
import TaskListImage from '../../assets/task-list.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage'
import TaskCard from '../../components/TaskCard';
import styles from './style';
import { api } from '../../services/api';

const getToken = async () => await AsyncStorage.getItem('userAuth');


const PageListTasks = ( data ) => (
    <ImageBackground 
        source = { Tasks }
        style={ styles.image }
    >
        <Text style={styles.title}>Lista de tarefas</Text>
        <Image source={ TaskListImage } style={ styles.imageTaskList }></Image>
        <View style={ styles.containerLista }>
            <ScrollView style={ styles.listArea }>
                {
                    data.map( item => {
                        return (
                            <TaskCard 
                                title={ item.title }
                                description={ item.description }
                            >
                            </TaskCard>
                        )
                    }) 
                }
            </ScrollView>
            <View style={ styles.containerRigth } >
                <Text style={styles.resumo}>
                    Resumo Semanal
                </Text>
                <Text style={styles.andamento}>
                    Tarefas: 6
                </Text>
                <Text style={styles.meta}>
                    Meta: 10
                </Text>
                <Text style={styles.faltam}>
                    Faltam: 4
                </Text>
            </View>
        </View>
        <View style={ styles.footerTaskList }>
            <Text style={ styles.footerText }>Usuário Logado: Bruno Brito</Text>
        </View>
    </ImageBackground>
)


const PageNotLogged = (token) => (
    <View>
        <Text>Usuário não autenticado, Valor de token {token}</Text>
    </View>
)




export default function TaskList(){
    const[data,setData] = useState([]);
    const[autorizeLoad, setAutorizeLoad] = useState(false);
    const[token, setToken] = useState('');

    

    useEffect(()=>{
        getToken().then(
            ( result ) =>{
                setToken(result);
                setAutorizeLoad(true);
                api.get('tasks-pageable?page=1&limit=6&filter=',{ headers:{'Authorization': result}}).then(response =>{
                    // setIsLoad(true);
                    // alert(JSON.stringify(response))
                    setData(response.data.result.return)
                    
                }).catch((error)=>{
                    alert(error.message)
                }).finally();
            },
            ( error ) =>{
                console.error(error.message);
                setAutorizeLoad(false);
            }
        )
    },[])

    return  ( autorizeLoad ?  PageListTasks(data)  :  PageNotLogged(token) );
}