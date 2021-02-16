import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback } from 'react';

import ConstellationBackground from '../../components/ConstellationBackground';
import PlanetList from '../../components/PlanetList';
import { useFavorites } from '../../hooks/favorites';

import { FavoritesStackProps } from '../../routes/favorites.routes';

import { Container, PlanetsContainer, Title } from './styles';

import { Planet } from '../../shared/interfaces';
import Header from '../../components/Header';

const Favorites: React.FC<StackScreenProps<
  FavoritesStackProps,
  'Favorites'
>> = ({ navigation }) => {
  const { planets } = useFavorites();
  const handlePlanetPress = useCallback(
    (planet: Planet) => {
      navigation.push('Planet', {
        planet,
      });
    },
    [navigation],
  );

  return (
    <>
      <ConstellationBackground />
      <Container>
        <Header showBackButton />

        <Title>Favoritos</Title>

        <PlanetsContainer>
          <PlanetList
            view="verticalList"
            planets={planets}
            onPlanetPressed={handlePlanetPress}
          />
        </PlanetsContainer>
      </Container>
    </>
  );
};

export default Favorites;
