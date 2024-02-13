import styled from "styled-components";
import Select from 'react-select';

export const Container = styled(Select)`
  .select__control {
    background-color: #fff;
    border-color: #ddd;
    &:hover {
      border-color: #ccc;
    }
  }
  .select__option--is-focused {
    background-color: #f5f5f5;
  }
  .select__option--is-selected {
    background-color: #ddd;
  }
`;