
import StyledJsxRegistry from "../registry";
import { ThemeProvider } from "styled-components";
import theme from "../global/theme";

import { Provider } from 'react-redux';
import store from '../store/index';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ 
  children 
}: Props) => {
  return (
    <Provider store={store}>
      <StyledJsxRegistry>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </StyledJsxRegistry>
    </Provider>
  );
};