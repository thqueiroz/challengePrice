import React, { useState, useCallback } from 'react';
import { DataKey } from 'recharts';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Container, Search, SearchButton } from './styles';
import SecondChart from '../../components/SecondChart';
import Loading from '../../components/Loading';

interface Response {
  date: string;
  store: string;
  price: DataKey;
  offer_price: number;
  product: string;
}

const chartProp: Array<object> = [];
const SecondReport: React.FC = () => {
  const [data, setData] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);

  const getRandomColor = useCallback((): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://run.mocky.io/v3/8fa48f04-3b3d-4637-b15d-c271d277a7bc',
      );
      setData(response.data);

      if (data.length === 0) {
        toast.error('Ops, pesquise novamente =[');
        setLoading(false);
        return;
      }

      data.forEach((item) => {
        const chartData = {
          nome: item.store,
          preco: item.price,
          data: item.date,
          color: getRandomColor(),
        };
        chartProp.push(chartData);
      });

      setLoading(false);
    } catch (err) {
      toast.error(err);
    }
  }, [data, getRandomColor]);
  return (
    <>
      <Container>
        <strong>Segundo relatório</strong>
        {!loading ? <SecondChart dataPros={chartProp} /> : <Loading />}
      </Container>
      <Search>
        <div>
          <strong>Fralda Pampers GG C/40</strong>
          <SearchButton type="button" onClick={handleSearch}>
            Pesquisar
          </SearchButton>
        </div>
      </Search>
    </>
  );
};

export default SecondReport;
