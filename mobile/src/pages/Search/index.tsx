/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { StackScreenProps } from '@react-navigation/stack';
import ConstellationBackground from '../../components/ConstellationBackground';
import Header from '../../components/Header';
import PlanetList from '../../components/PlanetList';

import { Container, ResultContainer, ResultText } from './styles';
import { Planet } from '../../shared/interfaces';

import api from '../../services/api';
import colors from '../../shared/colors';
import SearchInput from '../../components/SearchInput';

import { SearchStackProps } from '../../routes/search.routes';

type SearchRouteProps = {
  params: {
    query: string;
  };
};

const Search: React.FC<StackScreenProps<SearchStackProps, 'Search'>> = ({
  navigation,
  route,
}) => {
  const { query } = route.params;

  const [searchResults, setSearchResults] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);

  const searchPlanets = useCallback(async (searchText: string) => {
    setLoading(true);
    const { data } = await api.get(`/find/${searchText}`);
    setSearchResults(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    searchPlanets(query);
  }, [query, searchPlanets]);

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

        <ResultText>Resultados da busca</ResultText>

        <SearchInput marginTop={56} onSearch={searchPlanets} />

        {loading && (
          <ActivityIndicator
            size="large"
            color={colors.brandWhite}
            style={{ marginTop: 20 }}
          />
        )}

        {!loading && (
          <ResultContainer>
            <PlanetList
              view="verticalList"
              planets={searchResults}
              onPlanetPressed={handlePlanetPress}
            />
          </ResultContainer>
        )}
      </Container>
    </>
  );
};

export default Search;
