import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  GreetingContainer,
  GreetingTitleContainer,
  GreetingTitle,
  GreetingSubtitle,
} from './styles';

import BackIcon from '../../assets/icons/back.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

import colors from '../../shared/colors';

interface HeaderProps {
  showGreeting?: boolean;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showGreeting = false,
  showBackButton = false,
}) => {
  const navigation = useNavigation();

  return (
    <Container>
      {showGreeting && (
        <GreetingContainer>
          <GreetingTitleContainer>
            <GreetingTitle style={{ marginRight: 5 }}>Olá,</GreetingTitle>
            <MaskedView
              maskElement={<GreetingTitle>Vitor Medeiro</GreetingTitle>}
            >
              <LinearGradient
                colors={[colors.gradientPink.top, colors.gradientPink.bottom]}
              >
                <GreetingTitle style={{ opacity: 0 }}>Vitor</GreetingTitle>
              </LinearGradient>
            </MaskedView>
          </GreetingTitleContainer>
          <GreetingSubtitle>O que você vai aprender hoje?</GreetingSubtitle>
        </GreetingContainer>
      )}
      {showBackButton && (
        <BackIcon
          width={24}
          height={24}
          onPress={() => {
            navigation.reset({
              routes: [{ name: 'SearchTab' }, { name: 'Home' }],
            });
            navigation.goBack();
          }}
        />
      )}
      <TouchableOpacity>
        <SettingsIcon width={24} height={24} />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
