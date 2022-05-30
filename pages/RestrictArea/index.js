import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Created:
import TaskList from "../TaskList";
import TaskCreate from "../TaskCreate";

const Tabs = createBottomTabNavigator();

export default function RestrictArea( props ) {
    return(
        <NavigationContainer independent={true} >
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen name="Tarefas Ativas" component = { TaskList }  />
                <Tabs.Screen name="Criar Tarefa" component = { TaskCreate } />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}