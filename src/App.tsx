import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import { Container } from './styles/main';

const App: React.FC = () => { 
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Container>
        <Routes />
      </Container>
    </Provider>
  )
}

export default App;
