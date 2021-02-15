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

export const DetailedPlanetCardContainer = styled.View`
  width: 100%;
  background: ${colors.brandBackground};
  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
  height: 200px;
`;

export const DetailedPlanetCardContentContainer = styled.View`
  padding: 24px 16px;
  flex: 1;
`;

export const DetailedPlanetCardContentHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const DetailedPlanetCardContentTitle = styled.Text`
  font-family: 'roboto-bold';
  font-size: ${sizes.text.title}px;
  color: ${colors.brandWhite};
  line-height: 37.5px;
`;

export const DetailedPlanetCardContentBody = styled.Text`
  margin-top: 8px;
  font-family: 'roboto-regular';
  font-size: ${sizes.text.paragraph}px;
  color: ${colors.brandWhite};
  opacity: 0.65;
`;

export const DetailedPlanetCardContentFooter = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const DetailedPlanetCardContentFooterText = styled.Text`
  font-family: 'roboto-regular';
  font-size: ${sizes.text.paragraph}px;
  color: ${colors.brandWhite};
  margin-right: 10px;
`;

export const VerticalSeparator = styled.View`
  margin: 9px 0;
`;

export const HorizontalSeparator = styled.View`
  margin: 0 9px;
`;
