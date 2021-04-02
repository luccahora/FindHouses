import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SpashScreen } from './screens';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SpashScreen />
    </ThemeProvider>
  );
};

export default App;
