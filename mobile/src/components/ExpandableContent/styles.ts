import { css } from 'styled-components';
import styled from 'styled-components/native';
import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

interface ExpandedProps {
  open: boolean;
}

export const Container = styled.View``;

export const ContentHeader = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  align-items: center;
`;

export const ContentHeaderIcon = styled.View<ExpandedProps>`
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const ContentHeaderTitle = styled.Text`
  font-family: 'roboto-bold';
  font-size: ${sizes.text.content}px;
  margin-left: 16px;
`;

export const ContentBodyContainer = styled.View<ExpandedProps>`
  overflow: hidden;
  height: ${({ open }) => (open ? 'auto' : 0)};
`;

export const ContentBody = styled.View`
  padding: 20px 0;
`;

export const ContentFooter = styled.View`
  border-bottom-color: ${colors.brandBackground};
  border-bottom-width: 1px;
  width: 100%;
  opacity: 0.1;
  margin-bottom: 20px;
`;
