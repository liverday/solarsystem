import React from 'react';

import { StatusBar } from 'react-native';

import SolarSystemImage from '../../assets/background-solar-system.svg';

import { Container, BackgroundContainer, BrandContainer, Subtitle, Brand } from './styles';

const Onboarding: React.FC = () => (
    <Container>
        <StatusBar backgroundColor="#000" />
        <BackgroundContainer>
            <SolarSystemImage
                width="100%"
                height="100%"
                viewBox="900 100 850 900"
                preserveAspectRatio="xMinYMid slice"
            />
        </BackgroundContainer>
        <BrandContainer>
            <Subtitle>Aperte o cinto</Subtitle>
            <Brand>Comece sua jornada pelo sistema solar.</Brand>
        </BrandContainer>
    </Container>
);

export default Onboarding;
