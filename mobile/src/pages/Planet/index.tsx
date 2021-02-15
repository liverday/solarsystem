import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import ConstellationBackground from '../../components/ConstellationBackground';
import Header from '../../components/Header';
import { Planet as PlanetProps } from '../../shared/interfaces';

import { Container, PlanetHeader, PlanetHeaderImageContainer } from './styles';

type PlanetRouteProps = {
  params: {
    planet: PlanetProps;
  };
};

const Planet: React.FC = () => {
  const {
    params: { planet },
  } = useRoute() as PlanetRouteProps;

  return (
    <Container>
      <PlanetHeader>
        <ConstellationBackground view="reduced" />
        <Header showBackButton />

        <PlanetHeaderImageContainer>
          <SvgUri width={280} height={280} uri={planet.image} />
        </PlanetHeaderImageContainer>
      </PlanetHeader>
    </Container>
  );
};

export default Planet;
