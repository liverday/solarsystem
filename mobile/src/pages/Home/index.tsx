import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Container,
  SectionContainer,
  SectionContentContainer,
  SectionText,
} from './styles';

import ConstellationBackground from '../../components/ConstellationBackground';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import CategoryList from '../../components/CategoryList';
import PlanetList from '../../components/PlanetList';

import api from '../../services/api';

import { Planet } from '../../shared/interfaces';
import { HomeStackProps } from '../../routes/home.routes';

import colors from '../../shared/colors';

const Home: React.FC<StackScreenProps<HomeStackProps, 'Home'>> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    async function fetchPlanets(): Promise<void> {
      const { data } = await api.get<Planet[]>('planets');
      setPlanets(data);
      setLoading(false);
    }

    fetchPlanets();
  }, []);

  const handleSearch = useCallback(
    (searchText: string) => {
      if (!searchText.length) return;
      navigation.navigate('SearchTab', {
        screen: 'Search',
        params: {
          query: searchText,
        },
      });
    },
    [navigation],
  );

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
      <ScrollView>
        <Container>
          <Header showGreeting />

          <SearchInput
            marginTop={56}
            onSearch={handleSearch}
            cleanAfterDebounce
          />

          <SectionContainer>
            <SectionText>Categorias</SectionText>

            <SectionContentContainer>
              <CategoryList />
            </SectionContentContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionText>Planetas</SectionText>

            <SectionContentContainer>
              {loading && (
                <ActivityIndicator size="large" color={colors.brandWhite} />
              )}

              <PlanetList
                planets={planets}
                view="horizontalList"
                onPlanetPressed={handlePlanetPress}
              />
            </SectionContentContainer>
          </SectionContainer>
        </Container>
      </ScrollView>
    </>
  );
};

export default Home;
