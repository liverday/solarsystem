import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import colors from '../../shared/colors';
import sizes from '../../shared/sizes';

import ForwardIcon from '../../assets/icons/forward.svg';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
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
    color: ${colors.brandWhite};
    opacity: 0.65;
`;

export const Brand = styled.Text`
    font-size: 32px;
    font-family: 'roboto-bold';
    color: ${colors.brandWhite};
    text-align: center;
    line-height: 37.5px;
    margin: 8px 55px 0 55px;
`;

export const ButtonContainer = styled.View`
    align-items: center;
    margin-bottom: 30px;
`;

export const ButtonActionText = styled.Text`
    font-family: 'roboto-regular';
    font-size: 14px;
    color: ${colors.brandWhite};
`;

export const Button = styled(RectButton)`
    margin-top: 10px;
    padding: 16px 32px;
    border-radius: 8px;
    background-color: ${colors.gradientOrange.left};
    width: 200px;
    flex-direction: row;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: 'roboto-bold';
    font-size: ${sizes.text.buttonTitle + 'px'};
    color: ${colors.brandWhite};
    margin-right: 10px;

`;

export const ButtonIcon = styled(ForwardIcon)`
    margin-left: 8px;
`;
