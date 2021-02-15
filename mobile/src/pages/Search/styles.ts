import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export const Container = styled.View`
  flex: 1;
  padding: 34px 20px;
  margin-bottom: 60px;
`;

export const ResultText = styled.Text`
  margin-top: 32px;
  font-size: ${sizes.text.title}px;
  font-family: 'roboto-bold';
  color: ${colors.brandWhite};
`;

export const ResultContainer = styled.View`
  margin-top: 40px;
  flex: 1;
`;
