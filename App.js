import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './pages/Login';
import RestrictArea from './pages/RestrictArea';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="RestrictArea" component={ RestrictArea } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}