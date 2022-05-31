import React from "react";
import { View, Text } from 'react-native';
import TaskForm from "../../components/TaskForm";

export default function TaskCreate (){
    return(
        <View>
            <Text>Pagina de criação de tarefas</Text>
            <TaskForm></TaskForm>
        </View>
    )
}