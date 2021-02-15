import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';

import Home from '../pages/Home';
import Planet from '../pages/Planet';

import { Planet as PlanetProps } from '../shared/interfaces';

const HomeStack = createStackNavigator();

export type HomeStackProps = {
  Home: undefined;
  Planet: { planet: PlanetProps };
  SearchTab: NavigatorScreenParams<any>;
};

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Planet" component={Planet} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
