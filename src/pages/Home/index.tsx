import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

import api from '../../services/api';

import { Planet } from '../../shared/interfaces';
import colors from '../../shared/colors';
import PlanetList from '../../components/PlanetList';

const Home: React.FC = () => {
  const navigation = useNavigation();
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
      navigation.navigate('Search', {
        search: searchText,
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

          <SearchInput marginTop={56} onSearch={handleSearch} />

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

              <PlanetList planets={planets} view="horizontalList" />
            </SectionContentContainer>
          </SectionContainer>
        </Container>
      </ScrollView>
    </>
  );
};

export default Home;
