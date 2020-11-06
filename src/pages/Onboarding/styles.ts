import styled from 'styled-components/native';

import colors from '../../shared/colors';

export const Container = styled.View`
    flex: 1;
`;

export const BackgroundContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
    background: ${colors.brandBackground};
`;

export const BrandContainer = styled.View`
    margin-top: 260px;
    align-items: center;
    justify-content: flex-end;
`;

export const Subtitle = styled.Text`
    font-family: 'roboto-regular';
    font-size: 16px;
    color: ${colors.brandWhtie};
    opacity: 0.65;
`;

export const Brand = styled.Text`
    font-size: 32px;
    font-family: 'roboto-bold';
    color: ${colors.brandWhtie};
    text-align: center;
    line-height: 37.5px;
    margin: 8px 55px 0 55px;
`;
