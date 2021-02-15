import styled, { css } from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

export interface ContainerProps {
  marginTop?: number;
}

export const Container = styled.View<ContainerProps>`
  border-radius: 8px;
  background: ${colors.brandBackground};
  padding: 5px 17px;
  flex-direction: row;
  align-items: center;

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop}px;
    `}
`;

export const Input = styled.TextInput`
  color: ${colors.brandWhite};
  font-size: ${sizes.text.paragraph}px;
  opacity: 0.65;
  margin-left: 10px;
`;
