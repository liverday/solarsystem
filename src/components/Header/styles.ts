import styled from 'styled-components/native';
import sizes from '../../shared/sizes';
import colors from '../../shared/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const GreetingContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const GreetingSubtitle = styled.Text`
  margin-top: 4px;
  font-family: 'roboto-regular';
  font-size: ${sizes.text.paragraph}px;
  color: ${colors.brandWhite};
`;

export const GreetingTitleContainer = styled.View`
  flex-direction: row;
  margin-top: -10px;
`;

export const GreetingTitle = styled.Text`
  font-family: 'roboto-bold';
  font-size: ${sizes.text.title}px;
  color: ${colors.brandWhite};
  justify-content: center;
`;
