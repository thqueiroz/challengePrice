import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Search, SelectProducts, SelectDays } from './styles';

interface Response {
  name: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Response[]>([]);
  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/758192b4-c86a-4770-bec0-c7b1a876315a')
      .then((resonse) => {
        setData(resonse.data);
      });
  }, []);
  return (
    <>
      <Container>
        <strong>Dashboard</strong>
      </Container>
      <Search>
        <div>
          <strong>Encontre aqui o que está procurando</strong>
          <SelectProducts name="pesquisas" id="name">
            {data &&
              data.map((op) => <option value={op.name}>{op.name}</option>)}
          </SelectProducts>
          <p>Tempo de dias</p>
          <SelectDays name="dias" id="dias">
            <option value="1">1</option>
            <option value="2">2</option>
          </SelectDays>
        </div>
      </Search>
    </>
  );
};

export default Dashboard;
