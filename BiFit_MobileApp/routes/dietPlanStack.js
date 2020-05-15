import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DietPlan from "../screens/dietPlan";
import Header from '../shared/header';

const Stack = createStackNavigator()

export default DietNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='DietPlan'
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
          name='DietPlan' 
          component={DietPlan} 
          options={{ 
            headerTitle: () => <Header navigation={navigation} title='Diet Plan' />,
          }}
      />
    </Stack.Navigator>
  );
}