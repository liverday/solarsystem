import React from 'react';

import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import colors from './src/shared/colors';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.brandBackground} />

        <View style={{ flex: 1, backgroundColor: colors.brandBackground }}>
            <Routes />
        </View>
    </NavigationContainer>
);

export default App;
