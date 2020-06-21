import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import logo from '../../assets/logo-price-survey-white.png';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <strong>Desconectar</strong>
      <FiLogOut size={20} color="#fff" />
    </Container>
  );
};

export default Header;
