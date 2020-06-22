import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container } from './styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface TableProps {
  data: Array<{
    name?: string;
    store?: string;
    address?: string;
    surveyed_products?: number;
    total_products?: number;
  }>;
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.store}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.store}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.surveyed_products}</TableCell>
                <TableCell align="right">{row.total_products}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableComponent;
