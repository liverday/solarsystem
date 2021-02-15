import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../shared/colors';

import TabBar from '../components/TabBar';

import Onboarding from '../pages/Onboarding';
import Gallery from '../pages/Gallery';
import Favorites from '../pages/Favorites';

import SearchRoutes from './search.routes';
import HomeRoutes from './home.routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={HomeRoutes}
      initialParams={{ icon: 'home', title: 'Início' }}
    />
    <Tab.Screen
      name="SearchTab"
      component={SearchRoutes}
      initialParams={{ icon: 'search', title: 'Buscar' }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      initialParams={{ icon: 'save', title: 'Salvos' }}
    />
    <Tab.Screen
      name="Gallery"
      component={Gallery}
      initialParams={{ icon: 'gallery', title: 'Galeria' }}
    />
  </Tab.Navigator>
);

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
