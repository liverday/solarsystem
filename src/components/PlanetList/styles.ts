import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export const SimplePlanetCardContainer = styled.View`
  width: 140px;
  background: ${colors.brandBackground};
  border-radius: 8px;
  overflow: hidden;
`;

export const SimplePlanetCardContentContainer = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SimplePlanetCardContent = styled.Text`
  font-family: 'roboto-regular';
  font-size: ${sizes.text.content}px;
  color: ${colors.brandWhite};
`;
