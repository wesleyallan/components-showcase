import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Showcase } from './pages/Showcase';
import GlobalStyle from './styles/GlobalStyle';
import { Dark } from './styles/theme/theme';

function App() {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyle />
      <Showcase />
    </ThemeProvider>
  );
}

export default App;
