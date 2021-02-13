import React from 'react';

import { StyleSheet, useWindowDimensions } from 'react-native';

import { BackgroundContainer } from './styles';

import ConstellationSvg from '../../assets/background-constellation.svg';

const ConstellationBackground: React.FC = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <BackgroundContainer style={StyleSheet.absoluteFillObject}>
        <ConstellationSvg
          width="100%"
          height="100%"
          viewBox={`${width * 1.5} ${width / 2} ${width} ${height}`}
          preserveAspectRatio="xMinYMid Slice"
        />
      </BackgroundContainer>
    </>
  );
};

export default ConstellationBackground;
