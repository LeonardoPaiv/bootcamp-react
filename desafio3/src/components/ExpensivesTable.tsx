import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Expensive } from "../model/expensive";
import { getCurrency } from "../helpers/stringHelpers";

interface IExpensiveTableProps {
  values: Expensive[];
}

const ExpensivesTable = (props: IExpensiveTableProps) => {
  const { values } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Expensive</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.descricao}
              </TableCell>
              <TableCell align="right">{row.categoria}</TableCell>
              <TableCell align="right">{row.dia}</TableCell>
              <TableCell align="right">{getCurrency(row.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExpensivesTable

