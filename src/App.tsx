import React from 'react';
import Header from './components/Header';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { Container } from './styles/main';

const App: React.FC = () => { 
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Routes />
      </Container>
    </>
  )
}

export default App;
