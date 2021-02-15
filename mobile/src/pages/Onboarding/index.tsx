import React, { useCallback } from 'react';

import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SolarSystemImage from '../../assets/background-solar-system.svg';

import {
  Container,
  BackgroundContainer,
  BrandContainer,
  Subtitle,
  Brand,
  ButtonContainer,
  ButtonActionText,
  Button,
  ButtonText,
  ButtonIcon,
} from './styles';
import colors from '../../shared/colors';

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();

  const handleBegin = useCallback(() => {
    navigation.navigate('Main');
  }, [navigation]);

  return (
    <Container>
      <StatusBar backgroundColor="#000" />
      <BackgroundContainer>
        <SolarSystemImage
          width="100%"
          height="100%"
          viewBox={`940 160 ${height - 50} ${height + 100}`}
          preserveAspectRatio="xMinYMid slice"
        />
      </BackgroundContainer>
      <BrandContainer>
        <Subtitle>Aperte o cinto</Subtitle>
        <Brand>Comece sua jornada pelo sistema solar.</Brand>
      </BrandContainer>

      <ButtonContainer>
        <ButtonActionText>Pronto para a decolagem?</ButtonActionText>
        <Button onPress={handleBegin}>
          <ButtonText>Começar agora</ButtonText>
          <ButtonIcon width={16} height={16} color={colors.brandWhite} />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Onboarding;
