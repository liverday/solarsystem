import React from 'react';

import { StyleSheet, useWindowDimensions } from 'react-native';

import { BackgroundContainer } from './styles';

import ConstellationSvg from '../../assets/background-constellation.svg';

interface ConstellationBackgroundProps {
  view?: 'normal' | 'reduced';
}

const ConstellationBackground: React.FC<ConstellationBackgroundProps> = ({
  view = 'normal',
}) => {
  const { height, width } = useWindowDimensions();
  return (
    <BackgroundContainer
      style={[
        StyleSheet.absoluteFillObject,
        view === 'reduced' && {
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
          bottom: 70,
        },
      ]}
    >
      <ConstellationSvg
        width="100%"
        height="100%"
        viewBox={
          view === 'reduced'
            ? `${width / 2.5} ${width / 2} ${width / 2} ${height / 2}`
            : `${width * 1.5} ${width / 2} ${width} ${height}`
        }
        preserveAspectRatio="xMinYMid Slice"
      />
    </BackgroundContainer>
  );
};

export default ConstellationBackground;
