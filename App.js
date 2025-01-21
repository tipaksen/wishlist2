import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import AddWish, { UserProvider } from './AddWish';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddWish" component={AddWish} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
