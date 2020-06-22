import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { Container } from './styles';

const DashChart: React.FC = () => {
  const data = [
    {
      dia: 'Dia 1',
      pesquisas: 5,
    },
    {
      dia: 'Dia 2',
      pesquisas: 4,
    },
    {
      dia: 'Dia 3',
      pesquisas: 7,
    },
    {
      dia: 'Dia 4',
      pesquisas: 9,
    },
    {
      dia: 'Dia 5',
      pesquisas: 3,
    },
  ];

  return (
    <Container>
      <LineChart
        width={1048}
        height={530}
        data={data}
        margin={{ top: 203, right: 30, left: 220, bottom: 5 }}
      >
        <XAxis dataKey="nome" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pesquisas"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="linearClosed" dataKey="dia" stroke="#82ca9d" />
      </LineChart>
    </Container>
  );
};

export default DashChart;
