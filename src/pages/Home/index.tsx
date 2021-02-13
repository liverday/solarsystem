import React, { useCallback } from 'react';
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

const Home: React.FC = () => {
  const navigation = useNavigation();

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
      <Container>
        <Header showGreeting />

        <SearchInput marginTop={56} onSearch={handleSearch} />

        <SectionContainer>
          <SectionText>Categorias</SectionText>

          <SectionContentContainer>
            <CategoryList />
          </SectionContentContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

export default Home;
