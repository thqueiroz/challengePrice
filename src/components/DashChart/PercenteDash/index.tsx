import React, { useCallback } from 'react';

import { PieChart, Pie, Cell } from 'recharts';

// import { Container } from './styles';

const PercenteDash: React.FC = () => {
  const data = [
    { name: 'Dia 1', value: 5 },
    { name: 'Dia 2', value: 4 },
    { name: 'Dia 3', value: 7 },
    { name: 'Dia 4', value: 9 },
    { name: 'Dia 4', value: 3 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#000'];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = useCallback(
    ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    },
    [RADIAN],
  );

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PercenteDash;
