import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../shared/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Onboarding from '../pages/Onboarding';
import Home from '../pages/Home';

const MainNavigator: React.FC = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
)

const Routes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.brandBackground,
            },
        }}
    >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
);

export default Routes;
