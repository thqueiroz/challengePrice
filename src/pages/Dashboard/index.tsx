import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Container, Button } from './styles';

import DashChart from '../../components/DashChart';
import PercenteDash from '../../components/DashChart/PercenteDash';
import TableComponent from '../../components/TableComponent';
import Loading from '../../components/Loading';

interface Response {
  data: Array<{
    name: string;
    store: string;
    address: string;
    surveyed_products: number;
    total_products: number;
  }>;
}

const tableProps: Array<object> = [];
const Dashboard: React.FC = () => {
  const [data, setData] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const handleTable = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://run.mocky.io/v3/758192b4-c86a-4770-bec0-c7b1a876315a',
      );

      setData(response.data);

      if (data.length === 0) {
        toast.error('Ops, pesquise novamente =[');
        setLoading(false);
        return;
      }

      data &&
        data.forEach((item) => {
          tableProps.push(item);
        });

      setLoading(false);
    } catch (err) {
      toast.error(err);
    }
  }, [data]);
  return (
    <>
      <Container>
        <strong>Dashboard</strong>
        <p>
          Total dias: 5 <br /> Total Pesquisas: 28 <br />
          Meta: 30 pesquisas
        </p>
        <Button onClick={handleTable}>Exibir Tabela</Button>
        {!loading ? (
          <>
            <DashChart />
            <PercenteDash />
            <TableComponent data={tableProps} />
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
