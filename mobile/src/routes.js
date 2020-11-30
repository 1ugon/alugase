import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Detail from './pages/Detail';
import NewBike from './pages/NewBike';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="NewBike" component={NewBike} />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}