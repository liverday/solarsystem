import React from 'react';

import { SvgProps } from 'react-native-svg';
import HomeSvg from '../../assets/icons/home.svg';
import SearchSvg from '../../assets/icons/search.svg';
import SaveSvg from '../../assets/icons/save.svg';
import GallerySvg from '../../assets/icons/gallery.svg';

import { Container, TabText } from './styles';

const icons: { [key: string]: React.FC<SvgProps> } = {
  home: HomeSvg,
  search: SearchSvg,
  save: SaveSvg,
  gallery: GallerySvg,
};

interface TabProps {
  icon: string;
  title: string;
  selected: boolean;
  onPress(): void;
}

const Tab: React.FC<TabProps> = ({ icon, title, selected, onPress }) => {
  const Icon = icons[icon];

  return (
    <Container onPress={onPress}>
      <Icon width={20} height={20} opacity={selected ? 1 : 0.8} />
      {selected && <TabText>{title}</TabText>}
    </Container>
  );
};

export default Tab;
