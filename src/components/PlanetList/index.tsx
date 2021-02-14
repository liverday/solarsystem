import React from 'react';
import { FlatList, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ForwardIcon from '../../assets/icons/forward.svg';

import {
  SimplePlanetCardContainer,
  SimplePlanetCardContent,
  SimplePlanetCardContentContainer,
} from './styles';

import { Planet } from '../../shared/interfaces';
import colors from '../../shared/colors';

interface PlanetListProps {
  planets: Planet[];
  view: 'horizontalList' | 'verticalList';
}

const PlanetList: React.FC<PlanetListProps> = ({ planets, view }) => {
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

          <TouchableOpacity>
            <MaskedView maskElement={<ForwardIcon width={16} height={16} />}>
              <LinearGradient
                colors={[
                  colors.gradientOrange.left,
                  colors.gradientOrange.right,
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <ForwardIcon width={16} height={16} opacity={0} />
              </LinearGradient>
            </MaskedView>
          </TouchableOpacity>
        </SimplePlanetCardContentContainer>
      </SimplePlanetCardContainer>
    );
  };

  const renderVerticalViewItem = (planet: Planet) => {
    return <View />;
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
      ItemSeparatorComponent={() => <View style={{ marginHorizontal: 9 }} />}
    />
  );
};

export default PlanetList;
