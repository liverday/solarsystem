import React, { useState, useCallback, useEffect } from 'react';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Input, ContainerProps } from './styles';

import useDebouncedState from '../../hooks/useDebouncedState';

import SearchIcon from '../../assets/icons/search.svg';
import colors from '../../shared/colors';

interface SearchInputProps extends ContainerProps {
  value?: string;
  onSearch(search: string): void;
  cleanAfterDebounce?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value = '',
  onSearch,
  cleanAfterDebounce = false,
  ...rest
}) => {
  const [searchText, setSearchText] = useState(value);

  const debouncedSearchText = useDebouncedState(searchText, 1000);

  useEffect(() => {
    if (debouncedSearchText.length) {
      if (cleanAfterDebounce) setSearchText('');
      onSearch(debouncedSearchText);
    }
  }, [debouncedSearchText, onSearch, cleanAfterDebounce]);

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
