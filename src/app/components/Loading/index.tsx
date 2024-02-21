import React from 'react';

import {
  LoadContainer
} from './styles';
import { ClipLoader } from 'react-spinners';

export const Loading = () => {
  return (
    <LoadContainer>
      <ClipLoader color='#FF872C' loading={true} size={100} />
    </LoadContainer>
  );
}
