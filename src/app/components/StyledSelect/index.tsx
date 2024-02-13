import React from 'react';

import {
  Container
} from './styles';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
}

export const StyledSelect = ({
  options
}: Props) => {
  return (
    <Container 
      options={options}
    />
  );
}
