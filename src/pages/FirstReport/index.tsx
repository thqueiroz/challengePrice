import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Chart from '../../components/Chart';
import Loading from '../../components/Loading';
import { Container, Search, SearchButton } from './styles';

interface Response {
  date: string;
  store: string;
  price: number;
  offer_price: number;
  product: string;
}

const chartProp: Array<object> = [];
const FirstReport: React.FC = () => {
  const [data, setData] = useState<Response[]>([]);

  const [loading, setLoading] = useState(false);

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
          promocao: item.offer_price,
          preco: item.price,
          data: item.date,
        };
        chartProp.push(chartData);
      });

      setLoading(false);
    } catch (err) {
      toast.error(err);
    }
  }, [data]);

  return (
    <>
      <Container>
        <strong>Primeiro relatório</strong>

        {!loading ? <Chart dataPros={chartProp} /> : <Loading />}
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

export default FirstReport;
