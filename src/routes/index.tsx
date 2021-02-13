import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../shared/colors';

import TabBar from '../components/TabBar';

import Onboarding from '../pages/Onboarding';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={Home}
      initialParams={{ icon: 'home', title: 'Início' }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
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
