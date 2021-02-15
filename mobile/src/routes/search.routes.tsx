import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import Planet from '../pages/Planet';

import { Planet as PlanetProps } from '../shared/interfaces';

const SearchStack = createStackNavigator();

export type SearchStackProps = {
  Search: { query: string };
  Planet: { planet: PlanetProps };
};

const SearchNavigator: React.FC = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        name="Search"
        component={Search}
        initialParams={{ query: '' }}
      />
      <SearchStack.Screen name="Planet" component={Planet} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
