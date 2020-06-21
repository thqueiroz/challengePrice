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

interface ChartProps {
  dataPros: Array<{
    nome?: string;
    promocao?: number;
    preco?: number;
    data?: string;
  }>;
}

const Chart: React.FC<ChartProps> = ({ dataPros }) => {
  const data = dataPros.map((item) => {
    return {
      nome: item.nome,
      promocao: item.promocao,
      preco: item.preco,
      data: item.data,
    };
  });

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
          dataKey="preco"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="promocao" stroke="#82ca9d" />
        {/* <Line type="linearClosed" dataKey="data" stroke="#000080" /> */}
      </LineChart>
    </Container>
  );
};

export default Chart;
