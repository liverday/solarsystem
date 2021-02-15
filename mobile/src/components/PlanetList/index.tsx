import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ForwardIcon from '../../assets/icons/forward.svg';
import SaveIcon from '../../assets/icons/save.svg';
import SavedIcon from '../../assets/icons/saved.svg';

import {
  DetailedPlanetCardContainer,
  DetailedPlanetCardContentContainer,
  DetailedPlanetCardContentHeader,
  DetailedPlanetCardContentTitle,
  DetailedPlanetCardContentBody,
  DetailedPlanetCardContentFooter,
  DetailedPlanetCardContentFooterText,
  HorizontalSeparator,
  VerticalSeparator,
  SimplePlanetCardContainer,
  SimplePlanetCardContent,
  SimplePlanetCardContentContainer,
} from './styles';

import { Planet } from '../../shared/interfaces';
import colors from '../../shared/colors';

interface PlanetListProps {
  planets: Planet[];
  view: 'horizontalList' | 'verticalList';
  onPlanetPressed(planet: Planet): void;
}

const PlanetList: React.FC<PlanetListProps> = ({
  planets,
  view,
  onPlanetPressed,
}) => {
  const forwardIcon = useCallback(
    (planet: Planet) => (
      <TouchableOpacity onPress={() => onPlanetPressed(planet)}>
        <MaskedView maskElement={<ForwardIcon width={16} height={16} />}>
          <LinearGradient
            colors={[colors.gradientOrange.left, colors.gradientOrange.right]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <ForwardIcon width={16} height={16} opacity={0} />
          </LinearGradient>
        </MaskedView>
      </TouchableOpacity>
    ),
    [onPlanetPressed],
  );

  const renderHorizontalViewItem = (planet: Planet) => {
    const isSaturn = planet.name === 'Saturno';
    return (
      <SimplePlanetCardContainer>
        <SvgUri
          uri={planet.image}
          width={isSaturn ? 270 : 170}
          height={isSaturn ? 170 : 170}
          style={{
            marginLeft: isSaturn ? -120 : -60,
            marginTop: -50,
          }}
        />

        <SimplePlanetCardContentContainer>
          <SimplePlanetCardContent>{planet.name}</SimplePlanetCardContent>

          {forwardIcon(planet)}
        </SimplePlanetCardContentContainer>
      </SimplePlanetCardContainer>
    );
  };

  const renderVerticalViewItem = (planet: Planet) => {
    const isSaturn = planet.name === 'Saturno';
    return (
      <DetailedPlanetCardContainer>
        <SvgUri
          uri={planet.image}
          width={isSaturn ? 320 : 220}
          height={isSaturn ? 220 : 220}
          style={{
            marginLeft: isSaturn ? -170 : -70,
            marginTop: -50,
          }}
        />

        <DetailedPlanetCardContentContainer>
          <DetailedPlanetCardContentHeader>
            <DetailedPlanetCardContentTitle>
              {planet.name}
            </DetailedPlanetCardContentTitle>
            <SaveIcon width={24} height={24} opacity={0.65} />
          </DetailedPlanetCardContentHeader>

          <DetailedPlanetCardContentBody>
            {`${planet.resume.substr(0, 87)}...`}
          </DetailedPlanetCardContentBody>

          <DetailedPlanetCardContentFooter>
            <DetailedPlanetCardContentFooterText>
              Continue Lendo
            </DetailedPlanetCardContentFooterText>
            {forwardIcon(planet)}
          </DetailedPlanetCardContentFooter>
        </DetailedPlanetCardContentContainer>
      </DetailedPlanetCardContainer>
    );
  };

  return (
    <FlatList
      data={planets}
      keyExtractor={planet => planet.id}
      horizontal={view === 'horizontalList'}
      renderItem={
        ({ item }) =>
          view === 'horizontalList'
            ? renderHorizontalViewItem(item)
            : renderVerticalViewItem(item)
        // eslint-disable-next-line react/jsx-curly-newline
      }
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={
        () =>
          view === 'horizontalList' ? (
            <HorizontalSeparator />
          ) : (
            <VerticalSeparator />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export default PlanetList;
