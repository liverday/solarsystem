import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import sizes from '../../shared/sizes';
import colors from '../../shared/colors';

export const CategoryContainer = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 80px;
  height: 80px;
`;

export const CategoryText = styled.Text`
  font-size: ${sizes.text.paragraph}px;
  color: ${colors.brandWhite};
  font-family: 'roboto-regular';
  margin-top: 8px;
`;
