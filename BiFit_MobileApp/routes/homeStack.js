import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Challenges from '../screens/bifitChallenges';
import DoChallenge from '../screens/doChallenge';
import Header from '../shared/header';

const Stack = createStackNavigator()

export default Navigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#073e76',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{ 
          headerTitle: () => <Header navigation={navigation} title='BiFit Home' />,
        }} 
      /> 
      <Stack.Screen 
        name='Challenges' 
        component={Challenges} 
        options={{ 
          title: 'Challenges'
        }} 
      /> 
      <Stack.Screen 
        name='DoChallenge' 
        component={DoChallenge} 
        options={{ 
          title: 'Do Challenge'
        }} 
      />   
    </Stack.Navigator>
  );
}