import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Menu from './components/Menu';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
