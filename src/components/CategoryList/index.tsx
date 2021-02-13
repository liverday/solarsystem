import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import { SvgProps } from 'react-native-svg';
import PlanetIcon from '../../assets/icons/planets.svg';
import StarIcon from '../../assets/icons/stars.svg';
import GalaxyIcon from '../../assets/icons/galaxies.svg';
import AsteroidIcon from '../../assets/icons/asteroids.svg';
import colors from '../../shared/colors';
import { CategoryContainer, CategoryText } from './styles';

interface CategoryItem {
  icon: React.FC<SvgProps>;
  title: string;
  gradient: {
    top: string;
    bottom: string;
  };
}

const CategoryList: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      icon: PlanetIcon,
      title: 'Planetas',
      gradient: {
        top: colors.gradientBlue.top,
        bottom: colors.gradientBlue.bottom,
      },
    },
    {
      icon: AsteroidIcon,
      title: 'Asteróides',
      gradient: {
        top: colors.gradientPink.top,
        bottom: colors.gradientPink.bottom,
      },
    },
    {
      icon: StarIcon,
      title: 'Estrelas',
      gradient: {
        top: colors.gradientCyan.top,
        bottom: colors.gradientCyan.bottom,
      },
    },
    {
      icon: GalaxyIcon,
      title: 'Galáxias',
      gradient: {
        top: colors.gradientYellow.top,
        bottom: colors.gradientYellow.bottom,
      },
    },
  ];

  const renderCategoryItem = (category: CategoryItem) => {
    const Icon = category.icon;
    return (
      <TouchableOpacity>
        <CategoryContainer
          colors={[category.gradient.top, category.gradient.bottom]}
        >
          <Icon width={24} height={24} />

          <CategoryText>{category.title}</CategoryText>
        </CategoryContainer>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={({ title }) => title}
      renderItem={({ item }) => renderCategoryItem(item)}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginHorizontal: 9 }} />}
    />
  );
};

export default CategoryList;
