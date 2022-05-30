import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from './pages/TaskList';
import Login from './pages/Login';
// import { StatusBar } from 'expo-status-bar';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Login" component = { Login }  />
        <Tabs.Screen name="Tarefas Ativas" component = { TaskList }  />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}