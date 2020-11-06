import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import colors from '../shared/colors';

const Stack = createStackNavigator();

import Onboarding from '../pages/Onboarding';

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
    </Stack.Navigator>
);

export default Routes;
