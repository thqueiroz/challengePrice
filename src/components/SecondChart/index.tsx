import React, { useCallback } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  DataKey,
  Line,
} from 'recharts';

import { Container } from './styles';

interface ChartProps {
  dataPros: Array<{
    nome?: string;
    preco?: DataKey;
    data?: string;
    color?: string;
  }>;
}

const SecondChart: React.FC<ChartProps> = ({ dataPros }) => {
  const data = dataPros.map((item) => {
    return {
      data: item.data,
      preco: item.preco,
      nome: item.nome,
      color: item.color,
    };
  });

  const toPercent = useCallback((decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }, []);

  const getPercent = useCallback(
    (value, total) => {
      const ratio = total > 0 ? value / total : 0;

      return toPercent(ratio, 2);
    },
    [toPercent],
  );

  const renderTooltipContent = useCallback(
    (o) => {
      const { payload, label } = o;
      const total =
        payload &&
        payload.reduce(
          (result: any, entry: { value: any }) => result + entry.value,
          0,
        );

      return (
        <div className="customized-tooltip-content">
          <p className="total">{`${label} (Total: ${total})`}</p>
          <ul className="list">
            {payload &&
              payload.map(
                (entry: { color: any; name: any; value: any }, index: any) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={`item-${index}`} style={{ color: entry.color }}>
                    {`${entry.name}: ${entry.value}(${getPercent(
                      entry.value,
                      total,
                    )})`}
                  </li>
                ),
              )}
          </ul>
        </div>
      );
    },
    [getPercent],
  );

  return (
    <Container>
      <AreaChart
        width={600}
        height={400}
        data={data}
        stackOffset="expand"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="data" />

        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} />
        {data &&
          data.map((item) => (
            <Area
              type="monotone"
              dataKey="preco"
              stackId="1"
              stroke={item.color}
              fill={item.color}
            >
              <Line type="monotone" dataKey="nome" stroke={item.color} />
            </Area>
          ))}
      </AreaChart>
    </Container>
  );
};

export default SecondChart;
