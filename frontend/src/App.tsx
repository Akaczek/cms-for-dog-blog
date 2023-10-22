import { ThemeProvider } from 'styled-components';

import { Header, Footer } from './components';
import { theme } from './assets/theme';
import { ContentWrapper } from './App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ContentWrapper>

      </ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
