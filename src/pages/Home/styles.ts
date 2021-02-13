import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export const BackgroundContainer = styled.View`
  background: ${colors.brandBackground};
`;

export const Container = styled.View`
  flex: 1;
  padding: 34px 20px;
`;

export const SectionContainer = styled.View`
  margin-top: 48px;
`;

export const SectionText = styled.Text`
  font-size: ${sizes.text.sectionTitle}px;
  font-family: 'roboto-regular';
  color: ${colors.brandWhite};
`;

export const SectionContentContainer = styled.View`
  margin-top: 24px;
`;