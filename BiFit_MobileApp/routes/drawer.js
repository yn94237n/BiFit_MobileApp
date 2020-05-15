import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import homeNavigator from './homeStack';
import dietPlanNavigator from './dietPlanStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={homeNavigator} />
                <Drawer.Screen name="Diet Plan" component={dietPlanNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}