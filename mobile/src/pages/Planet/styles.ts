import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export const Container = styled.View`
  flex: 1;
  background: ${colors.brandWhite};
  margin-bottom: 70px;
`;

export const PlanetHeader = styled.View`
  padding: 18px;
  position: relative;
  width: 100%;
`;

export const PlanetHeaderImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const PlanetHeaderContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlanetTitle = styled.Text`
  font-family: 'roboto-bold';
  font-size: ${sizes.text.title}px;
  color: ${colors.brandBackground};
`;

export const PlanetActions = styled.View`
  flex-direction: row;
`;

export const PlanetBody = styled.Text`
  margin: 40px 0;
  font-family: 'roboto-regular';
  font-size: ${sizes.text.content}px;
  opacity: 0.75;
`;

export const FeatureContainer = styled.View`
  margin-bottom: 4px;
  flex-direction: row;
`;

export const FeatureTitle = styled.Text`
  font-family: 'roboto-bold';
  color: ${colors.brandBackground};
  font-size: ${sizes.text.content}px;
`;

export const FeatureContent = styled.Text`
  font-family: 'roboto-regular';
  color: ${colors.brandBackground};
  font-size: ${sizes.text.content}px;
  opacity: 0.75;
  margin-left: 4px;
`;
