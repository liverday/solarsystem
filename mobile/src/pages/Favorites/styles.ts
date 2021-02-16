import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 60px;
  padding: 34px 20px;
`;

export const Title = styled.Text`
  margin-top: 32px;
  font-family: 'roboto-bold';
  font-size: ${sizes.text.title}px;
  color: ${colors.brandWhite};
`;

export const PlanetsContainer = styled.View`
  margin-top: 40px;
  flex: 1;
`;
