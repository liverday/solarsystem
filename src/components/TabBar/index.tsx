import React, { useState, useCallback } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Container } from './styles';
import Tab from '../Tab';

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const [selectedRoute, setSelectedRoute] = useState('Home');
  const { routes } = state;

  const handleTabPress = useCallback(
    (newRoute: string, newIndex: number) => {
      if (state.index !== newIndex) {
        setSelectedRoute(newRoute);
        navigation.navigate(newRoute);
      }
    },
    [state, navigation],
  );

  return (
    <Container>
      {routes.map((route, index) => {
        const { icon, title } = route.params as any;
        return (
          <Tab
            key={route.name}
            icon={icon}
            title={title}
            selected={selectedRoute === route.name}
            onPress={() => handleTabPress(route.name, index)}
          />
        );
      })}
    </Container>
  );
};

export default TabBar;
