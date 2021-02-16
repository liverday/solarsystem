import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import ConstellationBackground from '../../components/ConstellationBackground';
import Header from '../../components/Header';
import ExpandableContent from '../../components/ExpandableContent';

import { useFavorites } from '../../hooks/favorites';
import { Planet as PlanetProps } from '../../shared/interfaces';
import colors from '../../shared/colors';

import {
  Container,
  ContentContainer,
  PlanetActions,
  PlanetHeader,
  PlanetHeaderContentContainer,
  PlanetHeaderImageContainer,
  PlanetTitle,
  PlanetBody,
  FeatureContainer,
  FeatureContent,
  FeatureTitle,
} from './styles';

import SaveIcon from '../../assets/icons/save_dark.svg';
import SavedIcon from '../../assets/icons/saved.svg';
import ShareIcon from '../../assets/icons/share.svg';

type PlanetRouteProps = {
  params: {
    planet: PlanetProps;
  };
};
const Planet: React.FC = () => {
  const {
    params: { planet },
  } = useRoute() as PlanetRouteProps;

  const { togglePlanet, isFavorite } = useFavorites();

  const isSaturn = planet.name === 'Saturno';
  const isDifferentThanSun = planet.name !== 'Sol';
  const isPlanetFavorited = isFavorite(planet.id);

  return (
    <Container>
      <PlanetHeader>
        <ConstellationBackground view="reduced" />
        <Header showBackButton />

        <PlanetHeaderImageContainer>
          <SvgUri
            width={isSaturn ? 480 : 280}
            height={280}
            uri={planet.image}
          />
        </PlanetHeaderImageContainer>
      </PlanetHeader>

      <ScrollView>
        <ContentContainer>
          <PlanetHeaderContentContainer>
            <PlanetTitle>{planet.name}</PlanetTitle>

            <PlanetActions>
              <TouchableOpacity onPress={() => togglePlanet(planet)}>
                {!isPlanetFavorited && <SaveIcon width={24} height={24} />}
                {isPlanetFavorited && (
                  <MaskedView
                    maskElement={<SavedIcon width={24} height={24} />}
                  >
                    <LinearGradient
                      colors={[
                        colors.gradientOrange.left,
                        colors.gradientOrange.right,
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <SavedIcon width={24} height={24} opacity={0} />
                    </LinearGradient>
                  </MaskedView>
                )}
              </TouchableOpacity>
              <TouchableOpacity>
                <ShareIcon
                  width={24}
                  height={24}
                  stroke={colors.brandBackground}
                  style={{ marginLeft: 16 }}
                />
              </TouchableOpacity>
            </PlanetActions>
          </PlanetHeaderContentContainer>

          <PlanetBody>{planet.resume}</PlanetBody>

          <ExpandableContent title="Introdução">
            <FeatureContent>{planet.introduction}</FeatureContent>
          </ExpandableContent>

          <ExpandableContent title="Características Físicas">
            <FeatureContainer>
              <FeatureTitle>Raio:</FeatureTitle>
              <FeatureContent>{planet.features.radius}</FeatureContent>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureTitle>Diâmetro:</FeatureTitle>
              <FeatureContent>{planet.features.Diameter}</FeatureContent>
            </FeatureContainer>

            <FeatureContainer>
              <FeatureTitle>Duração de Rotação:</FeatureTitle>
              <FeatureContent>
                {planet.features.rotationDuration}
              </FeatureContent>
            </FeatureContainer>

            {isDifferentThanSun && (
              <>
                <FeatureContainer>
                  <FeatureTitle>Distância do sol:</FeatureTitle>
                  <FeatureContent>{planet.features.sunDistance}</FeatureContent>
                </FeatureContainer>

                <FeatureContainer>
                  <FeatureTitle>Velocidade orbital:</FeatureTitle>
                  <FeatureContent>
                    {planet.features.orbitalSpeed}
                  </FeatureContent>
                </FeatureContainer>
                <FeatureContainer>
                  <FeatureTitle>Período orbital:</FeatureTitle>
                  <FeatureContent>
                    {planet.features.orbitalPeriod[0]}
                    {' / '}
                    {planet.features.orbitalPeriod[1]}
                  </FeatureContent>
                </FeatureContainer>
              </>
            )}

            {planet.features.satellites.number > 0 && (
              <FeatureContainer>
                <FeatureTitle>Número de satélites:</FeatureTitle>
                <FeatureContent>
                  {planet.features.satellites.number}
                </FeatureContent>
              </FeatureContainer>
            )}

            <FeatureContainer>
              <FeatureTitle>Temperatura:</FeatureTitle>
              <FeatureContent>{planet.features.temperature}</FeatureContent>
            </FeatureContainer>
          </ExpandableContent>

          <ExpandableContent title="Hidrologia" />

          <ExpandableContent title="Geografia" />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
};

export default Planet;
