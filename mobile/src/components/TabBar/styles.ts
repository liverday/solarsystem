import styled from 'styled-components/native';
import colors from '../../shared/colors';

export const Container = styled.View`
  padding: 15px 30px;
  background-color: ${colors.brandBackground};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: absolute;
  bottom: 0;
  flex-flow: row;
  width: 100%;
  justify-content: space-between;
`;
