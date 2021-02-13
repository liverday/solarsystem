import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const TabText = styled.Text`
  margin-top: 5px;
  font-size: ${sizes.text.bottomBarItem}px;
  font-family: 'roboto-regular';
  color: ${colors.brandWhite};
`;
