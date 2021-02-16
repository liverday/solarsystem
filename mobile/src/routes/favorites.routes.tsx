import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../pages/Favorites';
import Planet from '../pages/Planet';

import { Planet as PlanetProps } from '../shared/interfaces';

const FavoritesStack = createStackNavigator();

export type FavoritesStackProps = {
  Favorites: undefined;
  Planet: { planet: PlanetProps };
};

const FavoritesNavigator: React.FC = () => {
  return (
    <FavoritesStack.Navigator screenOptions={{ headerShown: false }}>
      <FavoritesStack.Screen name="Favorites" component={Favorites} />
      <FavoritesStack.Screen name="Planet" component={Planet} />
    </FavoritesStack.Navigator>
  );
};

export default FavoritesNavigator;
