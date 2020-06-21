import React from 'react';
import { FiSearch, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  Title,
  Dashboard,
  FirstReport,
  SecondReport,
} from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src="" alt="" />
        <strong>Tiago henrique</strong>
        <p>Admin</p>
        <Title>Administrativo</Title>

        <Link to="/">
          <Dashboard>
            <FiSearch size={20} color="#000" />
            <p>Pesquisas</p>
          </Dashboard>
        </Link>

        <Link to="/first-report">
          <FirstReport>
            <FiFileText size={20} color="#000" />
            <p>Relatório1</p>
          </FirstReport>
        </Link>

        <Link to="/second-report">
          <SecondReport>
            <FiFileText size={20} color="#000" />
            <p>Relatório2</p>
          </SecondReport>
        </Link>
      </Content>
    </Container>
  );
};

export default Menu;
