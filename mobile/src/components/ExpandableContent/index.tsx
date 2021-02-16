import React, { useState } from 'react';

import { View } from 'react-native';

import {
  ContentHeader,
  ContentBody,
  ContentFooter,
  ContentHeaderTitle,
  Container,
  ContentBodyContainer,
  ContentHeaderIcon,
} from './styles';

import DownIcon from '../../assets/icons/down.svg';

interface ExpandableContentProps {
  title: string;
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <ContentHeader>
        <ContentHeaderIcon open={open}>
          <DownIcon
            width={16}
            height={16}
            onPress={() => {
              setOpen(!open);
            }}
          />
        </ContentHeaderIcon>

        <ContentHeaderTitle>{title}</ContentHeaderTitle>
      </ContentHeader>

      <ContentBodyContainer open={open}>
        <ContentBody>{children}</ContentBody>
      </ContentBodyContainer>

      <ContentFooter />
    </Container>
  );
};

export default ExpandableContent;
