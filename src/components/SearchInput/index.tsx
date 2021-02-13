import React, { useState, useCallback, useEffect } from 'react';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Input, ContainerProps } from './styles';

import useDebouncedState from '../../hooks/useDebouncedState';

import SearchIcon from '../../assets/icons/search.svg';
import colors from '../../shared/colors';

interface SearchInputProps extends ContainerProps {
  onSearch(search: string): void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...rest }) => {
  const [searchText, setSearchText] = useState('');

  const debouncedSearchText = useDebouncedState(searchText, 500);

  useEffect(() => {
    if (debouncedSearchText.length) {
      setSearchText('');
      onSearch(debouncedSearchText);
    }
  }, [debouncedSearchText, onSearch]);

  const handleChange = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  return (
    <Container {...rest}>
      <SearchIcon width={16} height={16} />

      <Input
        placeholder="Procure planetas, asteriodes, estrelas..."
        placeholderTextColor={colors.brandWhite}
        value={searchText}
        onChangeText={handleChange}
      />
    </Container>
  );
};

export default SearchInput;
